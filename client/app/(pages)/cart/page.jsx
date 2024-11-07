"use client"

import { useUserContext } from "@/app/lib/UserContext"
import { observer } from "mobx-react-lite"
import IndexLayout from "@/app/components/IndexLayout/IndexLayout"
import PageIntro from "@/app/components/PageIntro/PageIntro"
import CartItems from "@/app/ui/Cart/CartItems/CartItems"
import CartFooter from "@/app/ui/Cart/CartFooter/CartFooter"

export default observer(function Cart() {
    const {user} = useUserContext()

    return (
        <IndexLayout>
            <main className="content">
                <PageIntro title="Cart" image="/cart-intro.webp"/>
                <CartItems items={user.cart.cart_items}/>
                <CartFooter/>
            </main>
        </IndexLayout>
    )
})