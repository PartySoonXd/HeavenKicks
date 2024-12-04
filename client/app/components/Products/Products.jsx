"use client"

import { useState, useEffect } from "react"

import ProductCard from "@/app/components/ProductCard/ProductCard"
import { $apiHost } from "@/app/http"
import { useSearchParams } from "next/navigation"

export default function Products({filters, className, setPagination, pageSize=12, newArrival=""}) {
    const [products, setProducts] = useState()

    const searchParams = useSearchParams()
    
    useEffect(() => {
        const getProducts = async() => {
            try {
                await $apiHost.get(`/api/products?pagination[pageSize]=${pageSize}&pagination[page]=${searchParams.has('page') ? searchParams.get('page'): 1}&${filters ? `${filters}`: ""}&${newArrival && "new-arrival=true"}`)
                .then(({data}) => {
                    setProducts(data.entries.results)
                    setPagination(data.entries.pagination)
                })                
            } catch (error) {
                
            }
        }
        getProducts()
    }, [searchParams, filters])
    
    if(products?.length > 0) {
        return (
            <ul className={`products ${className}`}>
                {products && products.map(item => {
                    return (
                        <ProductCard 
                            title={item.title}
                            price={item.price}
                            sizes={item.sizes}
                            slug={item.slug}
                            key={item.slug}
                            image={item.images[0].formats.small?.url}
                        />
                    )
                })}
            </ul>
        )
    } else {
        return (
            <h2 className="h2" style={{textAlign: "center", margin: "auto"}}>No results found</h2>
        )
    }
}