"use client"

import { useState } from "react"

import Notification from "../Notification/Notification"
import { $apiHost } from "@/app/http"


export default function Newsletter() {
    const [email, setEmail] = useState('')

    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const formHandler = async(e) => {
        try {
            e.preventDefault()
            console.log(email)
            await $apiHost.post("/api/subscribers", {
                data: {
                    email
                }
            }).then(data => {
                setTitle("Thank you!")
                setText("You will notify about new arrivals and discounts")
                setIsActive(true)
                setEmail('')
            })
        } catch (error) {
            console.log(error)
            setTitle("Error!")
            setText("Something wrong. Try later")
            setIsActive(true)
        }
    }
    if (isActive) {
        setTimeout(() => {
            setIsActive(false)
        }, 2000)
    }
    return (
        <>
        <Notification isActive={isActive} title={title} text={text}/>
        <div className="newsletter">
            <div className="newsletter-container">
                <h3 className="h3 newsletter-title">Get info about <span>new arrivals</span> and <span>discounts</span></h3>
                <form>
                    <input type="email" placeholder="email" value={email} className="newsletter-input p" onChange={e => setEmail(e.target.value)}/>
                    <button type="submit" disabled={isActive} onClick={e => formHandler(e)} className="newsletter-btn links">SUBSCRIBE</button>
                </form>
            </div>
        </div>
        </>
    )
}