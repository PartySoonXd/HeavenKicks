"use client"

import { googleAuth, signIn } from "@/app/http/userAPI"

export default function SignInForm() {
    const formHandler = async(e) => {
        try {
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
    
            await signIn(data).then(data => {
                console.log(data)
                localStorage.setItem("token", data.jwt)
            })
        } catch (error) {
            
        }
    }  

    return (
        <>
            <form onSubmit={e => formHandler(e)}>
                <input type="text" placeholder="email or username" name="identifier"/>
                <input type="password" placeholder="password" name="password"/>

                <button type="submit">SIGN UP</button>
            </form>
            <button onClick={e => googleAuth()}>continue with google</button>
        </>
        
    )
}