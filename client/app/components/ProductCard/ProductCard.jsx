import Image from "next/image"
import Link from "next/link"

import { useUserContext } from "@/app/lib/UserContext"
import { addToCartHandler } from "@/app/lib/addToCartHandler"

export default function ProductCard({title, price, image, slug}) {
    const {user} = useUserContext()
    // const getProductBySlug = async() => {
    //     const {data} = await $apiHost.get(`/api/products?filters[slug][$eq]=${slug}&populate=images`)
    //     console.log(data.data[0].attributes.images.data[0].attributes.formats.medium.url)
    //     return data.data[0]
    // }
    // const updateCartStore = async(id, token) => {
    //     await $apiHost.get(`/api/carts/${id}?populate=cart_items`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then(({data}) => {
    //         user.setCart(data.data.attributes)
    //     })

    // }
    // const addToCartHandler = async() => {
    //     if (!user.isAuth) {
    //         console.log('Please login to add to cart')
    //         return
    //     }
    //     const {attributes} = await getProductBySlug()

    //     const cartId = user.user.cart.id
    //     const token = await getToken()
    //     await $apiHost.post("/api/cart-items", {
    //         data: {
    //             cart: {
    //                 connect: [cartId]
    //             },
    //             title: attributes.title,
    //             price: attributes.price,
    //             imageURL: attributes.images.data[0].attributes.formats.medium.url,
    //             size: undefined
    //         },
    //     }, {
    //         headers: {
    //             Authorization: `Bearer ${token.value}`
    //         }
    //     }).then(data => {
    //         updateCartStore(user.user.cart.id, token.value)
    //     })
    // }
    return (
        <li className="product-card">
            <Link href={`/product/${slug}`}>
                <img src={"http://127.0.0.1:1337" + image} alt={title} className="product-card-img"/>
                <h3 className="product-card-title h4">{title}</h3>
            </Link>
            <div className="product-card-footer">
                <p className="product-card-price h3">{price}<span>$</span></p>
                <button type="button" onClick={() => addToCartHandler(user, slug, 37)}>
                    <Image src="/add-to-cart-icon.svg" width={40} height={40} alt="add to cart"/>
                </button> 
            </div>
        </li>
    )
}