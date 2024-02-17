"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { useUserContext } from "@/app/lib/UserContext";
import navigate from "@/app/lib/navigate";
import { $apiHost } from "@/app/http";
import {deleteToken, setToken} from "@/app/lib/tokenHandler";
import PageIntro from "@/app/components/PageIntro/PageIntro";

export default observer(function Home() {
  const {user} = useUserContext()
    
  const searchParams = useSearchParams()
  const authCode = searchParams.get('code')

  useEffect(() => {
    const authGoogleUser = async() => {
      try {
        const {data} = await $apiHost.post("/strapi-google-auth/user-profile", {code: authCode})

        setToken(data.data.token)
        user.setIsAuth(true)
        user.setUser(data.data.user)

        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }

    if (authCode) {
      authGoogleUser()
    }
  }, [])
  const logout = async () => {
    await deleteToken()
    user.setIsAuth(false)
  }
  return (
    <main className="content">
      <PageIntro 
        title={<>Step into Sneaker Heaven with <span>Heaven</span>Kicks!</>}
        image="/home-intro.jpg"
        className=" home"
      />
    </main>
  );
})
