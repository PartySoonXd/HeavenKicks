"use client"

import Link from "next/link"
import Image from "next/image"

import { $apiHost } from "@/app/http"
import { useUserContext } from "@/app/lib/UserContext"
import { setToken } from "@/app/lib/tokenHandler"
import navigate from "@/app/lib/navigate"
import InputField from "@/app/components/Auth/InputField/InputField"
import GoogleButton from "@/app/components/Auth/GoogleButton/GoogleButton"
import generateUUID from "@/app/lib/generateUUID"

export default function SignUpForm() {
    const {user} = useUserContext()

    
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

    const formHandler = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
            data.uuid = generateUUID()
            if (data.password != data.confirmedPassword) {
                console.log('passwords not equal')
                return
            }

            await $apiHost.post("/api/auth/local/register", data).then(({data}) => {
                setToken(data.jwt)
                user.setUser(data.user)
                user.setIsAuth(true)
                createCart(data.user.id, data.jwt)
                navigate("/")
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth-form-container">
            <Link href="/" className="auth-form-logo">
                <Image src="/Logo.svg" width={292} height={50} alt="HeavenKicks logo"/>
            </Link>
            <h1 className="h1 auth-form-title">Sign up</h1>
            <form onSubmit={e => formHandler(e)} className="auth-form">
                <InputField type="text" placeholder="username" name="username"/>
                <InputField type="email" placeholder="email" name="email"/>
                <InputField type="password" placeholder="password" name="password"/>
                <InputField type="password" placeholder="confirm password" name="confirmedPassword"/>
    
                <button type="submit" className="auth-form-button links">SIGN UP</button>
            </form>
            <span className="h4">or</span>
            <GoogleButton/>
            <h4 className="h4 auth-form-link">Already have an account? <Link href="/sign-in">Sign in</Link></h4>
        </div>
    )
}