"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import SizePicker from "../SizePicker/SizePicker"
import { addToCartHandler } from "@/app/lib/addToCartHandler"
import { useUserContext } from "@/app/lib/UserContext"
import Notification from "../Notification/Notification"

export default function ProductCard({title, price, image, slug, sizes}) {
    const {user} = useUserContext()
    const [pickerActive, setPickerActive] = useState(false)

    const [notificationActive, setNotificationActive] = useState(false)
    const [notificationTitle, setNotificationTitle] = useState("")
    const [notificationText, setNotificationText] = useState("")

    const buttonHandler = (size) => {
        try {
            if (!user.isAuth) {
                setNotificationTitle("Error!")
                setNotificationText("Please login to add to cart")
                setNotificationActive(true) 
                setPickerActive(false)
                return
            }
            if (!size) {
                setNotificationTitle("Failed!")
                setNotificationText("Please choose size to add")
                setNotificationActive(true)
                return
            }
            const status = addToCartHandler(user, slug, size)
            if (status) {
                setNotificationTitle("Success!")
                setNotificationText(`${title} added to cart`)
                setNotificationActive(true) 
                setPickerActive(false)
            } else {
                
                
            }
        } catch (error) {
            console.log(error)
            setNotificationTitle("Failed!")
            setNotificationText("Something wrong. Please try later")
            setNotificationActive(true)
            setPickerActive(false)
        }
    }
    if (notificationActive) {
        setTimeout(() => {
            setNotificationActive(false)
        }, 2000)
    }
    if (pickerActive) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    return (
        <li className="product-card">
            <Notification isActive={notificationActive} title={notificationTitle} text={notificationText}/>
            {pickerActive && 
            <SizePicker 
                setIsActive={setPickerActive} 
                sizes={sizes} 
                buttonHandler={buttonHandler}
                notificationActive={notificationActive}
            />}
            <Link href={`/product/${slug}`}>
                <img src={process.env.NEXT_PUBLIC_ASSETS_URL + image} alt={title} className="product-card-img"/>
                <h3 className="product-card-title h4">{title}</h3>
            </Link>
            <div className="product-card-footer">
                <p className="product-card-price h3">{price}<span>$</span></p>
                <button type="button" onClick={() => setPickerActive(true)} className="product-card-button">
                    <Image src="/add-to-cart-icon.svg" width={40} height={40} alt="add to cart"/>
                </button> 
            </div>
        </li>
    )
}