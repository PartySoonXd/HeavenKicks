"use client"

import { useState } from "react"

export default function CategoryGroup({name, categories}) {
    const [isActive, setIsActive] = useState(true)
    return (
        <ul className={`category-group ${isActive && "active"}`}>
            <div className={`category-group-title ${isActive && "active"}`}>
                <h3 className="category-group-title-text h3">{name}</h3>
                <button type="button" onClick={() => setIsActive(!isActive)}>
                    <span className={`cross ${isActive && "active"}`}></span>
                </button>
            </div>
            {isActive && categories.map(item => {
                return (
                    <li className="category" key={item.id}>
                        <input type="checkbox" name={item.attributes.slug} id={item.attributes.slug} className="category-checkbox"/>
                        <label htmlFor={item.attributes.slug} className="category-label h4">{item.attributes.name}</label>
                    </li>
                )
            })}
        </ul>
    )
}