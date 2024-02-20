"use client"

import { $apiHost } from "@/app/http"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ProductInfo({info}) {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategories = () => {
            const categoriesArray = []
            info.categories.data.forEach(async (item) => {
                const name = item.attributes.name
                const category = await $apiHost.get(`/api/categories?filters[name][$eq]=${name}&fields=name&populate[category_group][fields]=name`)
                .then(({data}) => {
                    return {
                        group: data.data[0].attributes.category_group.data.attributes.name,
                        name
                    }
                })
                categoriesArray.push(category)
            })
            return categoriesArray
        }
        const a = getCategories()
        console.log(a)
        setCategories(a)
    }, [])
    return (
        <div className="product-info">
            <h1 className="product-info-title">{info.title}</h1>
            <h2 className="product-info-price">
                <div className="product-info-price-container">
                    {info.price}
                    <span>$</span>
                </div>
                <span className="line"></span>
            </h2>
            <div className="product-info-sizes">
                <h3 className="product-info-subtitle h3">Size</h3>
                <ul className="product-info-sizes-list">
                    {Object.keys(info.sizes).map(item => {
                        return(
                            <li className="product-info-sizes-item links" key={info.sizes[item]}>
                                {info.sizes[item]}
                            </li>
                        )
                    })}
                </ul>
                <button type="button" className="product-info-button links">
                    ADD TO CART
                    <Image src="/add-to-cart-icon-white.svg" width={40} height={40} alt="add to cart"/>
                </button> 
            </div>
            <div className="product-info-description">
                <h3 className="product-info-subtitle h3">Description</h3>
                <ul className="product-info-description-categories">
                    {Object.keys(categories).map((item, i) => {

                        return (
                            <li className="product-info-description-category" key={i}>
                                <p className="product-info-description-category-group links">{categories[item].group}</p>
                                <p className="product-info-description-category-name links">{categories[item].name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}