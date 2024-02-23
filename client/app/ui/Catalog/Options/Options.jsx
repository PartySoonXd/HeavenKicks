"use client"

import Image from "next/image"
import { useState } from "react"

export default function Options({setIsActive, setSort, setSearch}) {
    const [selectIsActive, setSelectIsActive] = useState(false)
    const [selectValue, setSelectValue] = useState("sort")

    const selectHandler = (value, sort) => {
        setSelectValue(value)
        setSelectIsActive(false)
        setSort(sort)
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
                            onClick={() => selectHandler("Price ↓", "price:desc")}
                        >
                            Price ↓
                        </div>
                        <div 
                            className="options-select-dropdown-item p" 
                            name="fromLowToHigh" 
                            onClick={() => selectHandler("Price ↑", 'price:asc')}
                        >
                            Price ↑
                        </div>
                    </div>
                }
            </div>
            <input type="text" className="options-search p" name="search-input" placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}