"use client"

import { useUserContext } from "@/app/lib/UserContext";
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import navigate from "@/app/lib/navigate";
import { $apiHost } from "@/app/http";
import {deleteToken, setToken} from "@/app/lib/tokenHandler";

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
        <p>{user.user.email ? `hello, ${user.user.email}`: "Please authorize"}</p>
        <h1>Home page</h1>
        <button type="button" onClick={() => logout()}>Logout</button>
    </main>
  );
})
