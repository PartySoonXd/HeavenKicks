"use client"

import { useUserContext } from "@/app/lib/UserContext";
import { useSearchParams } from "next/navigation";
import { useLayoutEffect } from "react";

import navigate from "@/app/lib/navigate";
import { $apiHost } from "@/app/http";

export default function Home() {
  const {user} = useUserContext()
  const searchParams = useSearchParams()

  useLayoutEffect(() => {
    const authCode = searchParams.get('code')

    const authGoogleUser = async() => {
        await $apiHost.post("/strapi-google-auth/user-profile", {code: authCode})
        .then(({data}) => {
          localStorage.setItem("token", data.data.token)
          navigate('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
    if (authCode) {
      authGoogleUser()
    }
  }, [])
  return (
    <main className="content">
        <p>{user ? `hello, ${user.id}`: "Please authorize"}</p>
        <h1>Home page</h1>
    </main>
  );
}
