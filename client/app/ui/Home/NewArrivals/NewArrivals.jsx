import PrettyButton from "@/app/components/PrettyButton/PrettyButton"
import ProductCard from "@/app/components/ProductCard/ProductCard"
import { $apiHost } from "@/app/http"
import { useEffect, useState } from "react"

export default function NewArrivals() {
    const [products, setProducts] = useState()
    useEffect(() => {
        const getProducts = async() => {
            await $apiHost.get("/api/products?fields[0]=title&fields[1]=price&fields[2]=newArrival&populate[images][fields]=formats")
            .then(({data}) => {
                setProducts(data.data)
            })
        }
        getProducts()
    }, [])
    return (
        <div className="new-arrivals">
            <h2 className="h2">NEW ARRIVALS</h2>
            <ul className="new-arrivals-products">
                {products && Object.keys(products).map(item => {
                    const product = products[item].attributes
                    return (
                        <ProductCard 
                            title={product.title}
                            price={product.price}
                            id={product.id}
                            key={products[item].id}
                            image={product.images.data[0].attributes.formats.small?.url}
                        />
                    )
                })}
            </ul>
            <div className="new-arrivals-pretty-button-container">
                <PrettyButton url="/new-arrivals" text="see all"/>
            </div>
        </div>
    )
}