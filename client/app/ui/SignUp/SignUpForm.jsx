"use client"

import { $apiHost } from "@/app/http"
import { useUserContext } from "@/app/lib/UserContext"
import { setToken } from "@/app/lib/tokenHandler"
import navigate from "@/app/lib/navigate"

export default function SignUpForm() {
    const {user} = useUserContext()

    const googleInit = async() => {
        await $apiHost.get("/strapi-google-auth/init").then(({data}) => {
            navigate(data.url, "replace")
        })
    }
    const createCart = async(id, token) => {
        console.log(id, token)
        await $apiHost.post("/api/carts", {
            data: {
                user: {
                    connect: [id]
                },
                products: {}
            }
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        ).then(({data}) => {
            console.log(data)
        })
    }

    const formHandler = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
            if (data.password != data.confirmedPassword) {
                console.log('passwords not equal')
                return
            }

            await $apiHost.post("/api/auth/local/register", data).then(({data}) => {
                setToken(data.jwt)
                user.setUser(data.user)
                user.setIsAuth(true)
                createCart(data.user.id, data.jwt)
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
            <button type="button" onClick={googleInit}>continue with google</button>
        </>
    )
}