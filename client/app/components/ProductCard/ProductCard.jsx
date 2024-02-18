import Image from "next/image"

import { $apiHost } from "@/app/http"
import { useUserContext } from "@/app/lib/UserContext"
import { getToken } from "@/app/lib/tokenHandler"

export default function ProductCard({title, price, id, image}) {
    const {user} = useUserContext()
    const getProductById = async() => {
        const {data} = await $apiHost.get(`/api/products/${id}`)
        return data.data
    }
    const updateCartStore = async(id, token) => {
        await $apiHost.get(`/api/carts/${id}?populate=cart_items`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({data}) => {
            user.setCart(data.data.attributes)
        })

    }
    const addToCartHandler = async() => {
        if (!user.isAuth) {
            console.log('Please login to add to cart')
            return
        }
        const {attributes} = await getProductById()

        const cartId = user.user.cart.id
        const token = await getToken()
        await $apiHost.post("/api/cart-items", {
            data: {
                cart: {
                    connect: [cartId]
                },
                title: attributes.title,
                price: attributes.price,
                quantity: 1,
                size: undefined
            },
        }, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        }).then(data => {
            updateCartStore(user.user.cart.id, token.value)
        })
    }
    return (
        <li className="product-card">
            <img src={"http://127.0.0.1:1337" + image} alt={title} className="product-card-img"/>
            <h3 className="product-card-title h4">{title}</h3>
            <div className="product-card-footer">
                <p className="product-card-price h3">{price}<span>$</span></p>
                <button type="button" onClick={addToCartHandler}>
                    <Image src="/add-to-cart-icon.svg" width={40} height={40} alt="add to cart"/>
                </button> 
            </div>
        </li>
    )
}