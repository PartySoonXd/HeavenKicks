"use client"

import { googleInit, signIn } from "@/app/http/userAPI"

export default function SignInForm() {
    const formHandler = async(e) => {
        try {
            e.pentDefault()
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

                <button type="submit">SIGN IN</button>
            </form>
            <button onClick={e => googleInit()}>continue with google</button>
        </>
        
    )
}