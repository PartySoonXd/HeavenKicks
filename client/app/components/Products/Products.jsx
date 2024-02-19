"use client"

import { useState, useEffect } from "react"

import ProductCard from "@/app/components/ProductCard/ProductCard"
import { $apiHost } from "@/app/http"

export default function Products({filters, className}) {
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
        <ul className={`products ${className}`}>
            {products && Object.keys(products).map(item => {
                const product = products[item].attributes
                return (
                    <ProductCard 
                        title={product.title}
                        price={product.price}
                        id={products[item].id}
                        key={products[item].id}
                        image={product.images.data[0].attributes.formats.small?.url}
                    />
                )
            })}
        </ul>
    )
}