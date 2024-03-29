"use client" 

import IndexLayout from "@/app/components/IndexLayout/IndexLayout"
import { $apiHost } from "@/app/http"
import navigate from "@/app/lib/navigate"
import ProductImages from "@/app/ui/Product/ProductImages/ProductImages"
import ProductInfo from "@/app/ui/Product/ProductInfo/ProductInfo"
import { useEffect, useState } from "react"

export default function ProductPage({params}) {
    const [product, setProduct] = useState()
    
    useEffect(() => {
        const getProduct = async() => {
            await $apiHost.get(`/api/products?slug=${params.slug}&populate=*`).then(({data}) => {
                if(data.entries.results.length === 0) {
                    navigate("/error/404")
                }
                setProduct(data.entries.results[0])
            })
        }
        getProduct()
    }, [])
    if (product) {
        return (
            <IndexLayout>
            <main className="content" >
                <div className="product-container">
                    <ProductImages images={product.images}/>
                    <ProductInfo info={product}/>
                </div>
            </main>
            </IndexLayout>
        )
    }
}