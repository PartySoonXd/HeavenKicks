"use client"

import { useUserContext } from "@/app/lib/UserContext"
import { observer } from "mobx-react-lite"

export default observer(function Cart() {
    const {user} = useUserContext()
    const checkoutHandler = async() => {
        
    }
    console.log(user.user.cart)
    return (
        <main className="content">
            <h1 className="">Cart</h1>
            <div>
                {user.user.cart}
            </div>
            <button type="button" onClick={checkoutHandler}>CHECKOUT</button>
        </main>
    )
})