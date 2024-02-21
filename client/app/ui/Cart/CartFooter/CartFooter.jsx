import Link from "next/link"

import { useUserContext } from "@/app/lib/UserContext"

export default function CartFooter () {
    const {user} = useUserContext()
    const getTotalPrice = () => {
        let total = 0
        user.cart.cart_items?.data.map(({attributes}) => {
            total += attributes.price
        })
        return total
    }
    // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

    // const checkoutHandler = async() => {
    //     try {
    //         const stripe = await stripePromise
    //         const token = await getToken()
    //         const cartId = user.user.cart.id

    //         const res = await $apiHost.post("/api/orders", {
    //             cartId
    //         }, {
    //             headers: {
    //                 Authorization: `Bearer ${token.value}`
    //             }
    //         })

    //         await stripe.redirectToCheckout({
    //             sessionId: res.data.stripeSession.id
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <div className="cart-footer">
            
            <h2 className="h2 cart-footer-total">Total: <span>{getTotalPrice()}$</span></h2>
            <div className="cart-footer-buttons">
                <Link href="/catalog" className="catalog h3">CONTINUE SHOPPING</Link>
                <button type="button" onClick={() => {}} className="checkout h3">PROCEED TO CHECKOUT</button>
            </div>
        </div>
    )
}