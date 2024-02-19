import { useUserContext } from "@/app/lib/UserContext"

export default function CartItems({items}) {
    const {user} = useUserContext()

    return (
        <ul className="cart-items">
            {user.isAuth && user.cart.cart_items && user.cart.cart_items?.data.map(({attributes}) => {
                console.log(attributes)
            })}
        </ul>
    )
}