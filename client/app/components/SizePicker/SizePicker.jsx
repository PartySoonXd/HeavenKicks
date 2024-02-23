'use client'

import { useState } from "react"

export default function SizePicker({setIsActive, sizes, buttonHandler, notificationActive}) {
    const [size, setSize] = useState()

    
    return ( 
        <div className="size-picker-container" onClick={() => setIsActive(false)}>
            <div className="size-picker-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="h3">Choose your size</h3>
                <ul className="size-picker-sizes-list">
                    {sizes.map(item => {
                        return(
                            <li 
                                className={`size-picker-sizes-item links ${size === item && "active"}`} 
                                key={item} 
                                onClick={() => setSize(item)}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ul>
                <button 
                    type="button" 
                    className="size-picker-button links" 
                    onClick={() => buttonHandler(size)}
                    disabled={notificationActive}
                >
                    CONTINUE
                </button>
            </div>
        </div>
    )
}