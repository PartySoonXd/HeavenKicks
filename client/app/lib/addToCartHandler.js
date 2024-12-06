import { $apiHost } from "../http"
import { getToken } from "./tokenHandler"

const getProductBySlug = async(slug) => {
    const {data} = await $apiHost.get(`/api/products/${slug}`)
    return data.data
}
export const updateCartStore = async(id, token, user) => {
    await $apiHost.get(`/api/carts/${id}?populate=cart_items`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(({data}) => {
        user.setCart(data.data.attributes)
        return true
    })

}
export const addToCartHandler = async(user, slug, size) => {
    if (!user.isAuth) {
        return
    }
    if (!size) {
        return false
    }
    const product = await getProductBySlug(slug)

    const cartId = user.user.cart.id
    const token = await getToken()
    await $apiHost.post("/api/cart-items", {
        data: {
            cart: {
                connect: [cartId]
            },
            title: product.attributes.title,
            price: product.attributes.price,
            imageURL: product.attributes.images?.data[0]?.attributes?.formats?.medium?.url,
            size
        },
    }, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    }).then(data => {
        updateCartStore(user.user.cart.id, token.value, user)
    })
}