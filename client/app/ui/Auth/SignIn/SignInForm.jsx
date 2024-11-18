"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import GoogleButton from "@/app/components/Auth/GoogleButton/GoogleButton"
import InputField from "@/app/components/Auth/InputField/InputField"
import { $apiHost } from "@/app/http"
import { useUserContext } from "@/app/lib/UserContext"
import navigate from "@/app/lib/navigate"
import { setToken } from "@/app/lib/tokenHandler"
import Notification from "@/app/components/Notification/Notification"

export default function SignInForm() {
    const {user} = useUserContext()

    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const [isShownPass, setIsShownPass] = useState(false)

    if (isActive) {
        setTimeout(() => {
            setIsActive(false)
        }, 2100)
    }

    const formHandler = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

        await $apiHost.post("/api/auth/local", data).then(({data}) => {
            setToken(data.jwt)
            user.setUser(data.user)
            user.setIsAuth(true)
            navigate('/')
        }).catch(error => {
            if (error?.response?.status == 400) {
                setText("Invalid password or username.")
            }
            else {
                setText("Something wrong. Try later.")
            }
            setTitle("Error!")
            setIsActive(true)
        })
    }  

    return (
        <>
        <Notification isActive={isActive} title={title} text={text}/>
        <div className="auth-form-container">
            <Link href="/" className="auth-form-logo">
                <Image src="/Logo.svg" width={292} height={50} alt="HeavenKicks logo"/>
            </Link>
            <h1 className="h1 auth-form-title">Sign in</h1>
            <form onSubmit={e => formHandler(e)} className="auth-form">
                <InputField type="text" placeholder="email or username" name="identifier"/>
                <div className="auth-form-password-wrapper">
                    <InputField type={isShownPass ? "text": "password"} placeholder="password" name="password"/>
                    <Image 
                        src={isShownPass ? "/show-pass-icon.png" : "/hide-pass-icon.png"} 
                        width={20} 
                        height={20}
                        alt="shown password"
                        onClick={() => setIsShownPass(!isShownPass)}
                    />
                </div>

                <button type="submit" className="auth-form-button links">SIGN IN</button>
            </form>
            <span className="h4">or</span>
            <GoogleButton/>
            <h4 className="h4 auth-form-link">Not a member? <Link href="/sign-up">Sign up</Link></h4>
        </div>
        </>
    )
}