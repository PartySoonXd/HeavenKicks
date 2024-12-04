"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { $apiHost } from "@/app/http"
import CategoryGroup from "./CategoryGroup"
import navigate from "@/app/lib/navigate"

export default function Filters({isActive, setIsActive, setFilters}) {
    const [categories, setCategories] = useState()

    const pathname = usePathname()
    const params = new URLSearchParams()

    const timers = []

    useEffect(() => {
        const getCategories = async() => {
            await $apiHost.get('/api/category-groups?fields=name&populate[categories][fields]=name,slug')
            .then(({data}) => {
                setCategories(data.data)
            })
        }
        getCategories()
    }, [])

    const formHandler = (e) => {
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const categoryGroups = new Set(Object.values(data))

        for (let i = 0; i < timers.length; i++) {
            clearTimeout(timers[i])
        }

        const timer = setTimeout(() => {
            categoryGroups.forEach(group => {
                let result = []
                Object.keys(data).map(item => {
                    if (data[item] == group) {
                        result.push(item)
                    }
                })
                params.set(`category[${group.toLowerCase()}]`, result.join(','))
            })        
            const decodedParams = decodeURIComponent(params.toString());
            setFilters(decodedParams)
            navigate(pathname + "?" + decodedParams)
        }, 500)
        timers.push(timer)
    } 
    
    return (
        <div className={`filters-container ${isActive && "active"}`} onClick={() => setIsActive(false)}>
            <form className="filters" onChange={formHandler} onClick={e => e.stopPropagation()}>
                {categories && Object.keys(categories).map(item => {
                    return <CategoryGroup 
                        key={categories[item].id}
                        name={categories[item].attributes.name}
                        categories={categories[item].attributes.categories.data}
                    />
                })}
            </form>
        </div>
    )
}