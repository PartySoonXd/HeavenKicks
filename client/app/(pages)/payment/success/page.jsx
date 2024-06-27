"use client"

import Link from "next/link";

import { useUserContext } from "@/app/lib/UserContext";
import PaymentTemplate from "@/app/ui/PaymentTemplate/PaymentTemplate";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { $apiHost } from "@/app/http";
import { getToken } from "@/app/lib/tokenHandler";

export default observer(function PaymentSuccess() {
    const {user} = useUserContext()
    const params = useSearchParams()
    
    
    useEffect(() => {
        const updateData = async () => {
            try {
                const sessionId = params.get('session_id')
                const cartId = params.get('cart_id')
                const token = await getToken()
    
                const {data} = await $apiHost.get(`/api/orders?filters[sessionId][$eq]=${sessionId}`, {
                    headers: {Authorization: `Bearer ${token.value}`}
                })
                await $apiHost.put(`/api/orders/${data.data[0].id}`, {
                    data: {
                        status: "confirmed"
                    }
                }, {
                    headers: {Authorization: `Bearer ${token.value}`}
                })
                const cart = await $apiHost.get(`/api/carts/${cartId}?populate=cart_items`, {
                    headers: {Authorization: `Bearer ${token.value}`}
                })
                cart.data.data.attributes.cart_items.data.map(async (item) => {
                    await $apiHost.delete(`/api/cart-items/${item.id}`,  {
                        headers: {Authorization: `Bearer ${token.value}`}
                    })
                })
            }   
            catch (error) {
                console.log(error)
            }
        }
        updateData()
    }, [])

    return (
        <Suspense>
            <PaymentTemplate status="Success!" component={
                <div className="h1">You can check your order in <Link href={`/profile`}>profile</Link></div>
            }/>
        </Suspense>
    )
})