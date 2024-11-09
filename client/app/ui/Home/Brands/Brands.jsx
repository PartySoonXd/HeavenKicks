"use client"

import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import { $apiHost } from "@/app/http";

export default function Brands() {
    const [brands, setBrands] = useState()
    useEffect(() => {
        const getBrands = async () => {
            try {
                await $apiHost.get("/api/brand-cards?populate=category&populate=logo&populate=sneaker").then(({data}) => {
                    setBrands(data.data)
                })
            } catch (error) {
                
            }
        }
        getBrands()
    }, [])
    return (
        <div className="brands">
            <h2 className="h2 brands-title">BRANDS</h2>
            <div className="brands-cards">
                {
                    brands && brands.map(item => {
                        return <BrandCard item={item} key={item.id}/>
                    })
                }
            </div>
        </div>
    )
}