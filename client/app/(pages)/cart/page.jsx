"use client"

import { useUserContext } from "@/app/lib/UserContext"
import { observer } from "mobx-react-lite"

export default observer(function Cart() {
    const {user} = useUserContext()
    let total = 0
    // const checkoutHandler = async() => {
        
    // }
    
    return (
        <main className="content">
            <h1 className="">Cart</h1>
            <div>
                {user.isAuth && user.cart.cart_items && user.cart.cart_items?.data.map(({attributes}) => {
                    total += attributes.price
                })}
                <p>{total}</p>
            </div>
            {/* <button type="button" onClick={checkoutHandler}>CHECKOUT</button> */}
        </main>
    )
})