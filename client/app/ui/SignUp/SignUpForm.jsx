"use client"

import { signUp } from "@/app/http/userAPI"
import { googleInit } from "@/app/http/userAPI"

export default function SignUpForm() {
    const formHandler = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
            if (data.password != data.confirmedPassword) {
                console.log('passwords not equal')
                return
            }
            await signUp(data).then(data => {
                localStorage.setItem('token', data.jwt)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={e => formHandler(e)}>
                <input type="text" placeholder="username" name="username"/>
                <input type="email" placeholder="email" name="email"/>
                <input type="password" placeholder="password" name="password"/>
                <input type="password" placeholder="confirm password" name="confirmedPassword"/>

                <button type="submit">SIGN UP</button>
            </form>
            <button type="button" onClick={e => googleInit()}>continue with google</button>
        </>
    )
}