"use client"

import { useRef, useState } from "react"

export default function PriceFilter () {
    const progressRef = useRef()
    const maxInputRef = useRef()
    const minInputRef = useRef()
    
    const [maxValue, setMaxValue] = useState(1000)
    const [minValue, setMinValue] = useState(0)
    const [currentMinValue, setCurrentMinValue] = useState(minValue)
    const [currentMaxValue, setCurrentMaxValue] = useState(maxValue)

    const gap = 100

    const inputHandler = (target) => {
        const minInputValue = minInputRef.current.value
        const maxInputValue = maxInputRef.current.value
        
        if (maxInputValue - minInputValue < gap) {
            if (target.name === "min-input") {
                minInputRef.current.value = maxInputValue - gap
            } else {
                maxInputRef.current.value = minInputValue + gap
            }
        }
        else {
            progressRef.current.style.left = (minInputValue / minInputRef.current.max) * 100 + "%"
            progressRef.current.style.right = 100 - (maxInputValue / maxInputRef.current.max) * 100 + "%"
        }
    }
    return (
        <div className="filters-price">
            <div className="category-group-title">
                    <h3 className="category-group-title-text h3">Price</h3>
            </div>
            <div className="filters-price-slider-container">
                    <div className="filters-price-slider-values">
                        <div className="links min-value">{minValue}</div>
                        <div className="links max-value">{maxValue}</div>
                    </div>
                <div className="filters-price-slider">
                    <div className="filters-price-slider-progress" ref={progressRef}>
                        {/* <div className="current-values">
                            {console.log(currentMinValue, currentMaxValue)}
                            <div className="min-value links">{currentMinValue}</div>
                            <div className="max-value links">{currentMaxValue}</div>
                        </div> */}
                    </div>
                    </div>
                <div className="filters-price-inputs">
                    <input 
                        type="range" 
                        name="min-input" 
                        id="min-input" 
                        defaultValue={minValue} 
                        min={minValue}  
                        max={maxValue} 
                        ref={minInputRef}
                        onChange={(e) => inputHandler(e.target)}
                    />
                    <input 
                        type="range" 
                        name="max-input" 
                        id="max-input" 
                        defaultValue={maxValue} 
                        min={minValue}  
                        max={maxValue}
                        ref={maxInputRef}
                        onChange={(e) => inputHandler(e.target)}
                    />
                </div>
            </div>
        </div>
    )
}