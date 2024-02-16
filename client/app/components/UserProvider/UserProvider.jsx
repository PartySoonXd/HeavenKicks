"use client"

import { useEffect, useState } from "react";

import { UserContext } from "@/app/lib/UserContext";
import UserStore from "@/app/store/userStore";
import { getToken } from "@/app/lib/tokenHandler";
import { $apiHost } from "@/app/http";

export default function UserProvider({children}) {
    const userStore = new UserStore()
    const [isAuth, setIsAuth] = useState(false)
    
    useEffect(() => {
        const getCart = async(id, token) => {
            await $apiHost.get(`/api/carts/${id}?populate=cart_items`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(({data}) => {
                userStore.setCart(data.data.attributes)
            })
        }
        const authUser = async() => {
            const token = await getToken()
            if (token) {
                try {
                    await $apiHost.get('/api/users/me?fields=id&fields=email&fields=username&populate=cart', {
                        headers: {
                            Authorization: `Bearer ${token.value}` 
                        }
                    }).then(({data}) => {
                        userStore.setUser(data)
                        userStore.setIsAuth(true)
                        setIsAuth(true)
                        getCart(data.cart.id, token.value)
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }
        authUser()
        
    }, [isAuth])

    return (
        <UserContext.Provider
            value={{user: userStore}}
        >
            {children}
        </UserContext.Provider>
    )
}