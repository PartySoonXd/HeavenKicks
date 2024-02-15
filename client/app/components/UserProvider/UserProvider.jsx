"use client"

import { useEffect, useState } from "react";

import { UserContext } from "@/app/lib/UserContext";
import UserStore from "@/app/store/userStore";
import { getToken } from "@/app/lib/tokenHandler";
import { $apiHost } from "@/app/http";
import { observer } from "mobx-react-lite";

export default observer(function UserProvider({children}) {
    const userStore = new UserStore()
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const checkUser = async() => {
            const token = await getToken()
            if (token) {
                try {
                    const {data} = await $apiHost.get('/api/users/me?fields=id&fields=email&fields=username&populate=cart', {
                        headers: {
                            Authorization: `Bearer ${token.value}` 
                        }
                    }) 
                    userStore.setUser(data)
                    userStore.setIsAuth(true)
                    setIsAuth(true)
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        checkUser()
    }, [isAuth])

    
    return (
        <UserContext.Provider
            value={{user: userStore}}
        >
            {children}
        </UserContext.Provider>
    )
})