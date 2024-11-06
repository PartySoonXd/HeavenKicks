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
            try {
                await $apiHost.get(`/api/products/${params.slug}`).then(({data}) => {
                    setProduct(data.data.attributes)
                })
            } catch (error) {
                if (error.response.status === 404) {
                    navigate("/error/404")
                } else {
                    navigate("/error/500")
                }
            }
        }
        getProduct()
    }, [])
    if (product) {
        return (
            <IndexLayout>
            <main className="content" >
                <div className="product-container" style={{marginBottom: "50px"}}>
                    <ProductImages images={product.images.data}/>
                    <ProductInfo info={product}/>
                </div>
            </main>
            </IndexLayout>
        )
    }
}