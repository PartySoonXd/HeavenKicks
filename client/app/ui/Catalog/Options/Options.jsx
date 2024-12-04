"use client"

import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function Options({setIsActive, setFilters}) {
    const [selectIsActive, setSelectIsActive] = useState(false)
    const [selectValue, setSelectValue] = useState("sort")

    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")

    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    
    const timers = []

    const selectHandler = (value, sort) => {
        setSort(sort)
        setSelectValue(value)
        setSelectIsActive(false)
        
        params.append("options[sort]", sort)
        params.append("options[search]", search)

        for (let i = 0; i < timers.length; i++) {
            clearTimeout(timers[i])
        }
                    
        const timer = setTimeout(() => {
            const decodedParams = decodeURIComponent(params.toString());
            setFilters(decodedParams)
        }, 300)

        timers.push(timer)
    }
    
    const searchHandler = (search) => {
        setSearch(search)
        params.append("options[sort]", sort)
        params.append("options[search]", search)

        for (let i = 0; i < timers.length; i++) {
            clearTimeout(timers[i])
        }

        const timer = setTimeout(() => {
            const decodedParams = decodeURIComponent(params.toString());
            setFilters(decodedParams)
        }, 750)

        timers.push(timer)
    }
    return (
        <div className="options">
            <Image 
                src="/filter-icon.png" 
                width={50} height={50} 
                alt="filters"
                className="options-filters"
                onClick={() => setIsActive(true)}
            />
            <div className="options-select-container">
                <div className={`options-select ${selectIsActive && "active"}`} onClick={() => setSelectIsActive(!selectIsActive)}>{selectValue}</div>
                {selectIsActive && 
                    <div className="options-select-dropdown">
                        <div 
                            className="options-select-dropdown-item p" 
                            onClick={() => selectHandler("Price ↓", "desc")}
                        >
                            Price ↓
                        </div>
                        <div 
                            className="options-select-dropdown-item p" 
                            name="fromLowToHigh" 
                            onClick={() => selectHandler("Price ↑", "asc")}
                        >
                            Price ↑
                        </div>
                    </div>
                }
            </div>
            <input  
                type="text" 
                className="options-search p" 
                name="search-input" 
                placeholder="search" 
                onChange={(e) => searchHandler(e.target.value)}
                maxLength={65}
            />
        </div>
    )
}