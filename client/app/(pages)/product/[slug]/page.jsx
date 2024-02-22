"use client" 

import IndexLayout from "@/app/components/IndexLayout/IndexLayout"
import { $apiHost } from "@/app/http"
import ProductImages from "@/app/ui/Product/ProductImages/ProductImages"
import ProductInfo from "@/app/ui/Product/ProductInfo/ProductInfo"
import { useEffect, useState } from "react"

export default function ProductPage({params}) {
    const [product, setProduct] = useState()
    
    useEffect(() => {
        const getProduct = async() => {
            await $apiHost.get(`/api/products?filters[slug][$eq]=${params.slug}&populate=*`).then(({data}) => {
                setProduct(data.data[0].attributes)
            })
        }
        getProduct()
    }, [])
    if (product) {
        return (
            <IndexLayout>

            <main className="content" >
                <div className="product-container">
                    <ProductImages images={product.images.data}/>
                    <ProductInfo info={product}/>
                </div>
            </main>
            </IndexLayout>
        )
    }
}