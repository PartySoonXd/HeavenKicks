import { $apiHost } from "@/app/http";
import { useUserContext } from "@/app/lib/UserContext";
import { updateCartStore } from "@/app/lib/addToCartHandler";
import { getToken } from "@/app/lib/tokenHandler";
import Image from "next/image";

export default function CartItem({imageURL, size, price, title, id}) {
    const {user} = useUserContext()
    const deleteHandler = async() => {
        try {
            const token = await getToken()
            await $apiHost.delete(`/api/cart-items/${id}`, {
                headers: {Authorization: `Bearer ${token.value}`}
            }).then(data => {
                updateCartStore(user.user.cart.id, token.value, user)
            })
        } catch (error) {
            
        }
    }
    return (
        <li className="cart-item">
            <img src={process.env.NEXT_PUBLIC_ASSETS_URL + imageURL} alt={`${title} photo`} className="cart-item-image"/>
            <div className="cart-item-info">
                <h3 className="h3 cart-item-title">{title}</h3>
                <h3 className="h3 cart-item-size"><span>Size:</span> {size}</h3>
                <h3 className="h3 cart-item-price"><span>Price:</span> {price}$</h3>
            </div>
            <button type="button" className="delete-button" onClick={deleteHandler}>
                <Image src="/delete-icon.svg" width={40} height={40} alt="delete button"/>
            </button>
        </li>
    )
}