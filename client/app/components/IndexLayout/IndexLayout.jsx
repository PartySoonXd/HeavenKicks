"use client"

import { useEffect } from "react"

import Header from "../Header/Header"
import Newsletter from "../Newsletter/Newsletter"
import { useUserContext } from "@/app/lib/UserContext"
import { $apiHost } from "@/app/http"
import { getToken } from "@/app/lib/tokenHandler"
import { observer } from "mobx-react-lite"
import Footer from "../Footer/Footer"

export default observer(function IndexLayout({children}) {
    const {user} = useUserContext()
    
    useEffect(() => {
        const getCart = async(id, token) => {
            await $apiHost.get(`/api/carts/${id}?populate=cart_items`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(({data}) => {
                user.setCart(data.data.attributes)
            })
        }
        const authUser = async() => {
            const token = await getToken()
            if (token) {
                try {
                    await $apiHost.get('/api/users/me?fields=id&fields=email&fields=username&fields=uuid&populate=cart&populate=orders', {
                        headers: {
                            Authorization: `Bearer ${token.value}` 
                        }
                    }).then(({data}) => {
                        user.setUser(data)
                        user.setIsAuth(true)
                        getCart(data.cart.id, token.value)
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }
        authUser()  
    }, [user.isAuth])
    return (
        <>
        <div className="container">
            <Header/>
            {children}
        </div>
        <Newsletter/>
        <Footer/>
        </>
    )
})