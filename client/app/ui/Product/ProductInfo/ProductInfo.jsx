"use client"

import Image from "next/image"
import { useState } from "react"

import { addToCartHandler } from "@/app/lib/addToCartHandler"
import { useUserContext } from "@/app/lib/UserContext"
import Notification from "@/app/components/Notification/Notification"

export default function ProductInfo({info}) {
    const {user} = useUserContext()
    const [size, setSize] = useState(undefined)

    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const buttonHandler = () => {
        try {
            if (!size) {
                setTitle("Failed!")
                setText("Plese choose size to add.")
                setIsActive(true)
                return
            }
            addToCartHandler(user, info.slug, size)
            setTitle("Success!")
            setText(`${info.title} added to cart`)
            setIsActive(true) 
        } catch (error) {
            setTitle("Failed!")
            setText("Something wrong. Try again")
            setIsActive(true)
        }
    }
    if (isActive) {
        setTimeout(() => {
            setIsActive(false)
        }, 3000)
    }
    return (
        <>
        <Notification isActive={isActive} title={title} text={text}/>
        <div className="product-info">
            <h1 className="product-info-title h2">{info.title}</h1>
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
                            <li 
                                className={`product-info-sizes-item links ${size === info.sizes[item] && "active"}`} 
                                key={info.sizes[item]} 
                                onClick={() => setSize(info.sizes[item])}
                            >
                                {info.sizes[item]}
                            </li>
                        )
                    })}
                </ul>
                <button type="button" className="product-info-button links" disabled={isActive} onClick={buttonHandler}>
                    ADD TO CART
                    <Image src="/add-to-cart-icon-white.svg" width={40} height={40} alt="add to cart"/>
                </button> 
            </div>
            <div className="product-info-description">
                <h3 className="product-info-subtitle h3">Description</h3>
                <p className="p product-info-description-text">{info.description}</p>
            </div>
        </div>
        </>
    )
}