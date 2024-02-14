"use client"

import { $apiHost } from "@/app/http";
import { UserContext } from "@/app/lib/UserContext";
import { useState, useEffect } from "react";

export default function UserProvider({children}) {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState()
    const [token, setToken] = useState()

    const authUserHandler = async (token) => {
        setIsLoading(true)
        try {
            const {data} = await $apiHost.get('/api/users/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    
    const handleUser = (user) => {
        setUser(user);
    };
    
    useEffect(() => {
        setToken(localStorage.getItem('token'))
        console.log(token)
        if (token) {
            authUserHandler(token)
        }
    }, [token]) 
    return (
        <UserContext.Provider
            value={{user, setUser: handleUser, isLoading}}
        >
            {children}
        </UserContext.Provider>
    )
}