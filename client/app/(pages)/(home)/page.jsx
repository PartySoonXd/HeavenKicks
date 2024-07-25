"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { useUserContext } from "@/app/lib/UserContext";
import navigate from "@/app/lib/navigate";
import { $apiHost } from "@/app/http";
import { setToken } from "@/app/lib/tokenHandler";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import NewArrivals from "@/app/ui/Home/NewArrivals/NewArrivals";
import Brands from "@/app/ui/Home/Brands/Brands";
import IndexLayout from "@/app/components/IndexLayout/IndexLayout";

export default observer(function Home() {
  const {user} = useUserContext()
    
  const searchParams = useSearchParams()
  const authCode = searchParams.get('code')

  useEffect(() => {
    const createCart = async(id, token) => {
      await $apiHost.post("/api/carts", {
          data: {
              user: {
                  connect: [id]
              },
          }
      },
      {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }
      )
    }
    const authGoogleUser = async() => {
      try {
        const {data} = await $apiHost.post("/strapi-google-auth/user-profile", {code: authCode})

        setToken(data.data.token)
        user.setIsAuth(true)
        user.setUser(data.data.user)
        createCart(data.data.user.id, data.data.token)
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }

    if (authCode) {
      authGoogleUser()
    }
  }, [])
  return (
    <IndexLayout>
      <main className="content">
        <PageIntro 
          title={<>Step into Sneaker Heaven with <span>Heaven</span>Kicks!</>}
          image="/home-intro.jpg"
          className=" home"
        />
        <NewArrivals/>
        <Brands/>
      </main>
    </IndexLayout>
  );
})
