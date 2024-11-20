import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js"

import { useUserContext } from "@/app/lib/UserContext"
import { getToken } from "@/app/lib/tokenHandler"
import { $apiHost } from "@/app/http"
import PrettyButton from "@/app/components/PrettyButton/PrettyButton"

export default function CartFooter () {
    const {user} = useUserContext()
    const getTotalPrice = () => {
        let total = 0
        user.cart.cart_items?.data.map(({attributes}) => {
            total += attributes.price
        })
        return total
    }
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

    const checkoutHandler = async() => {
        try {
            const stripe = await stripePromise
            const token = await getToken()
            const cartId = user.user.cart.id
            const userId = user.user.id
            const products = user.cart.cart_items

            const res = await $apiHost.post("/api/orders", {
                cartId, userId, products
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
        <div className="cart-footer">
            {user.cart?.cart_items?.data.length === 0 && 
            <div className="cart-footer-empty">
                <h3 className="h2">Your shopping cart is empty.</h3>
                <PrettyButton url="/catalog" text="GO TO CATALOG"/>
            </div>
            }
            {!(user.cart?.cart_items?.data.length === 0) && 
            <>
            <h2 className="h2 cart-footer-total">Total: <span>{getTotalPrice()}$</span></h2>
            <div className="cart-footer-buttons">
                <Link href="/catalog" className="catalog h4">CONTINUE SHOPPING</Link>
                <button type="button" onClick={checkoutHandler} className="checkout h4">PROCEED TO CHECKOUT</button>
            </div>
            </>
            }
        </div>
    )
}