"use client"

import { useState, useEffect } from "react"

import ProductCard from "@/app/components/ProductCard/ProductCard"
import { $apiHost } from "@/app/http"
import navigate from "@/app/lib/navigate"

export default function Products({filters, sort="", search="", className, setPagination, page=1, pageSize=16, newArrival="", brand=""}) {
    const [products, setProducts] = useState()
    
    useEffect(() => {
        const getProducts = async() => {
            let values = []
            if(filters && Object.keys(filters).length > 0) {
                page = 1
                values = Object.keys(filters)
            }
            if(brand) {
                values.push(brand)
                navigate('/catalog')
            }
            await $apiHost.get(`/api/products?filter=${values}&sort=${sort}&search=${search}&page=${page}&pageSize=${pageSize}&newArrival=${newArrival}`)
            .then(({data}) => {
                setProducts(data.entries.results)
                setPagination(data.entries.pagination)
            })
        }
        getProducts()
    }, [filters, sort, search, page])
    
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