"use client"

import { loadStripe } from "@stripe/stripe-js"

import { useUserContext } from "@/app/lib/UserContext"
import { observer } from "mobx-react-lite"
import { $apiHost } from "@/app/http"
import { getToken } from "@/app/lib/tokenHandler"
import IndexLayout from "@/app/components/IndexLayout/IndexLayout"
import PageIntro from "@/app/components/PageIntro/PageIntro"

export default observer(function Cart() {
    const {user} = useUserContext()
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
    let total = 0
    const checkoutHandler = async() => {
        try {
            const stripe = await stripePromise
            const token = await getToken()
            const cartId = user.user.cart.id

            const res = await $apiHost.post("/api/orders", {
                cartId
            }, {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            })

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <IndexLayout>
            <main className="content">
                <PageIntro title="Cart" image="/cart-intro.jpg"/>
                <div>
                    {user.isAuth && user.cart.cart_items && user.cart.cart_items?.data.map(({attributes}) => {
                        total += attributes.price
                    })}
                    <p>{total}</p>
                </div>
                <button type="button" onClick={checkoutHandler}>CHECKOUT</button>
            </main>
        </IndexLayout>
    )
})