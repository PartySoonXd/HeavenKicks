"use client"

import { useEffect, useState } from "react"

import { $apiHost } from "@/app/http"
import CategoryGroup from "./CategoryGroup"
import PriceFilter from "./PriceFilter"

export default function Filters({isActive, setIsActive}) {
    const [categories, setCategories] = useState()
    useEffect(() => {
        const getCategories = async() => {
            await $apiHost.get('/api/category-groups?&fields=name&populate[categories][fields]=name')
            .then(({data}) => {
                setCategories(data.data)
            })
        }
        getCategories()
    }, [])

    return (
        <div className={`filters-container ${isActive && "active"}`} onClick={() => setIsActive(false)}>
            <form className="filters" onClick={e => e.stopPropagation()}>
                {categories && Object.keys(categories).map(item => {
                    return <CategoryGroup 
                        key={categories[item].id}
                        name={categories[item].attributes.name}
                        categories={categories[item].attributes.categories.data}
                    />
                })}
                <PriceFilter/>
            </form>
        </div>
    )
}