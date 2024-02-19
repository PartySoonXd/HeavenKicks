"use client"

import { useState } from "react"

export default function Options() {
    const [selectIsActive, setSelectIsActive] = useState(false)
    const [selectValue, setSelectValue] = useState("sort")
    const selectHandler = (value) => {
        setSelectValue(value)
        setSelectIsActive(false)
    }
    return (
        <div className="options">
            <div className="options-select-container">
                <div className={`options-select ${selectIsActive && "active"}`} onClick={() => setSelectIsActive(!selectIsActive)}>{selectValue}</div>
                {selectIsActive && 
                    <div className="options-select-dropdown">
                        <div 
                            className="options-select-dropdown-item p" 
                            onClick={() => selectHandler("Price ↓")}
                        >
                            Price ↓
                        </div>
                        <div 
                            className="options-select-dropdown-item p" 
                            name="fromLowToHigh" 
                            onClick={() => selectHandler("Price ↑")}
                        >
                            Price ↑
                        </div>
                    </div>
                }
            </div>
            {/* <select name="sort" className="options-form-select p">
                <option className="select-option" value='yearLgToSm'>Price ↓</option>
                <option className="select-option" value='yearSmToLg'>Price ↑</option>
            </select> */}
            <input type="text" className="options-search p" name="search-input" placeholder="search"/>
        </div>
    )
}