"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { $apiHost } from "@/app/http"
import { useUserContext } from "@/app/lib/UserContext"
import { setToken } from "@/app/lib/tokenHandler"
import navigate from "@/app/lib/navigate"
import InputField from "@/app/components/Auth/InputField/InputField"
import GoogleButton from "@/app/components/Auth/GoogleButton/GoogleButton"
import generateUUID from "@/app/lib/generateUUID"
import Notification from "@/app/components/Notification/Notification"

export default function SignUpForm() {
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
    const passwordValidation = (password, confirmedPassword) => {
        const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        if (password != confirmedPassword) {
            setText("Passwords not equal.")
            return false
        }
        if (password.length > 20 || password.length < 8) {
            setText("Password must contain at least 8 and less than 20 characters long.")
            return false
        }
        if (regExp.test(password)) {
            return true 
        } else {
            setText("Password must contain a-z, A-Z, 0-9.")
            return false
        } 

    }
    
    const createCart = async(id, token) => {
        await $apiHost.post("/api/carts", 
        {
            data: {
                user: {
                    connect: [id]
                }
            }
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
    }

    const formHandler = async (e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
            data.uuid = generateUUID()

            if (data.username == '' || data.email == '' || 
                data.password == '' || data.confirmedPassword == ''
            ) {
                setText("All fields must be complete.")
                setTitle("Error!")
                setIsActive(true)
                return
            }

            const isValid = passwordValidation(data.password, data.confirmedPassword)
            if (!isValid) {
                setTitle("Error!")
                setIsActive(true)
                return
            }

            await $apiHost.post("/api/auth/local/register", data).then(({data}) => {
                setToken(data.jwt)
                user.setUser(data.user)
                user.setIsAuth(true)
                createCart(data.user.id, data.jwt)
                navigate("/")
            }).catch(error => {
                if (error?.response?.status == 400) {
                    setText("Email or username are already in use.")
                } else {
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
            <h1 className="h1 auth-form-title">Sign up</h1>
            <form onSubmit={e => formHandler(e)} className="auth-form">
                <InputField type="text" placeholder="username" name="username"/>
                <InputField type="email" placeholder="email" name="email"/>
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
                <div className="auth-form-password-wrapper">
                    <InputField type={isShownPass ? "text": "password"} placeholder="confirm password" name="confirmedPassword"/>
                    <Image 
                        src={isShownPass ? "/show-pass-icon.png" : "/hide-pass-icon.png"} 
                        width={20} 
                        height={20}
                        alt="shown password"
                        onClick={() => setIsShownPass(!isShownPass)}
                    />
                </div>
                <button type="submit" className="auth-form-button links">SIGN UP</button>
            </form>
            <span className="h4">or</span>
            <GoogleButton/>
            <h4 className="h4 auth-form-link">Have an account? <Link href="/sign-in">Sign in</Link></h4>
        </div>
        </>
    )
}