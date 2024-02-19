"use client"

import { useEffect, useState } from "react";

import IndexLayout from "@/app/components/IndexLayout/IndexLayout";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Products from "@/app/components/Products/Products";

export default function Catalog() {
    const [products, setProducts] = useState()

    useEffect(() => {
        const getProducts = async() => {
            await $apiHost.get("/api/products?fields[0]=price&fields[1]=title").then(({data}) => {
                setProducts(data.data)
            })
        }
        getProducts()
    }, [])
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Catalog" image="/catalog-intro.jpg"/>
            <Products className="catalog"/>
        </main>
        </IndexLayout>
    )
}