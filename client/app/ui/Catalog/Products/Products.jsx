"use client"
import ProductCard from "@/app/components/ProductCard/ProductCard"
import { $apiHost } from "@/app/http"
import { useEffect, useState } from "react"

export default function Products() {
    const [products, setProducts] = useState()

    useEffect(() => {
        const getProducts = async() => {
            await $apiHost.get("/api/products?fields[0]=price&fields[1]=title").then(({data}) => {
                console.log(data.data)
                setProducts(data.data)
            })
        }
        getProducts()
    }, [])

    return (
        <div className="products">
            <br/>
            <ul className="products-list">
                {products && Object.keys(products).map((item) => {
                    return (
                        <ProductCard 
                            title={products[item].attributes.title} 
                            price={products[item].attributes.price}
                            id={products[item].id}
                            key={products[item].id}
                        />
                    )
                })}
            </ul>
            <br/>
        </div>
    )
}