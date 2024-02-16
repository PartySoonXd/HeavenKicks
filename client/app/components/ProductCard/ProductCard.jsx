import { $apiHost } from "@/app/http"
import { useUserContext } from "@/app/lib/UserContext"
import { getToken } from "@/app/lib/tokenHandler"

export default function ProductCard({title, price, id}) {
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
            <h3>{title}</h3>
            <p>{price}</p>
            <button type="button" onClick={addToCartHandler}>Add to cart</button>
        </li>
    )
}