"use client"

import { $apiHost } from "@/app/http"
import { useUserContext } from "@/app/lib/UserContext"
import navigate from "@/app/lib/navigate"
import { setToken } from "@/app/lib/tokenHandler"

export default function SignInForm() {
    const {user} = useUserContext()

    const googleInit = async() => {
        await $apiHost.get("/strapi-google-auth/init").then(({data}) => {
            navigate(data.url, "replace")
        })
    }

    const formHandler = async(e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
    
            await $apiHost.post("/api/auth/local", data).then(({data}) => {
                setToken(data.jwt)
                user.setUser(data.user)
                user.setIsAuth(true)
            })
        } catch (error) {
            
        }
    }  

    return (
        <>
            <form onSubmit={e => formHandler(e)}>
                <input type="text" placeholder="email or username" name="identifier"/>
                <input type="password" placeholder="password" name="password"/>

                <button type="submit">SIGN IN</button>
            </form>
            <button onClick={googleInit}>continue with google</button>
        </>
        
    )
}