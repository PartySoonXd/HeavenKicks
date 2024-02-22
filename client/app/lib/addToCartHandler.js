import { $apiHost } from "../http"
import { getToken } from "./tokenHandler"

const getProductBySlug = async(slug) => {
    const {data} = await $apiHost.get(`/api/products?filters[slug][$eq]=${slug}&populate=images`)
    console.log(data.data[0].attributes.images.data[0].attributes.formats.medium.url)
    return data.data[0]
}
export const updateCartStore = async(id, token, user) => {
    await $apiHost.get(`/api/carts/${id}?populate=cart_items`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(({data}) => {
        user.setCart(data.data.attributes)
    })

}
export const addToCartHandler = async(user, slug, size) => {
    if (!user.isAuth) {
        console.log('Please login to add to cart')
        return
    }
    if (!size) {
        console.log('please select your size!')
        return
    }
    const {attributes} = await getProductBySlug(slug)

    const cartId = user.user.cart.id
    const token = await getToken()
    await $apiHost.post("/api/cart-items", {
        data: {
            cart: {
                connect: [cartId]
            },
            title: attributes.title,
            price: attributes.price,
            imageURL: attributes.images.data[0].attributes.formats.medium.url,
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