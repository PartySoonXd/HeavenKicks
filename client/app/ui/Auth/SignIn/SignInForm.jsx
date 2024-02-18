"use client"

import GoogleButton from "@/app/components/Auth/GoogleButton/GoogleButton"
import InputField from "@/app/components/Auth/InputField/InputField"
import { $apiHost } from "@/app/http"
import { useUserContext } from "@/app/lib/UserContext"
import navigate from "@/app/lib/navigate"
import { setToken } from "@/app/lib/tokenHandler"

export default function SignInForm() {
    const {user} = useUserContext()

    const formHandler = async(e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
    
            await $apiHost.post("/api/auth/local", data).then(({data}) => {
                setToken(data.jwt)
                user.setUser(data.user)
                user.setIsAuth(true)
                navigate('/')
            })
        } catch (error) {
            console.log(error)
        }
    }  

    return (
        <div className="auth-form-container">
            <h1 className="h1 auth-form-title">Sign in</h1>
            <form onSubmit={e => formHandler(e)} className="auth-form">
                <InputField type="text" placeholder="email or username" name="identifier"/>
                <InputField type="password" placeholder="password" name="password"/>

                <button type="submit" className="auth-form-button links">SIGN IN</button>
            </form>
            <span className="h4">or</span>
            <GoogleButton/>
        </div>
    )
}