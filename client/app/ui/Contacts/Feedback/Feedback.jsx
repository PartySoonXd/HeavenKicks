"use client"

import { useState } from "react"

import { $apiHost } from "@/app/http"
import Notification from "@/app/components/Notification/Notification"

export default function Feedback() {
    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const formHandler = async(e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)

            await $apiHost.post("/api/feedbacks", {data}).then(data => {
                setTitle("Success!")
                setText("We are respond you on email soon")
                setIsActive(true)
            })
        } catch (error) {
            setTitle("Failed!")
            setText("Please try later")
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
        <div className="feedback">
            <h2 className="h2 feedback-title">GET IN TOUCH</h2>
            <form className="feedback-form" onSubmit={e => formHandler(e)}>
                <textarea placeholder="Your question" name="message" className="p feedback-form-textarea"></textarea>
                <input type="email" placeholder="email" name="email" className="p feedback-form-input"/>
                <button type="submit" disabled={isActive} className="feedback-form-button links">SUBMIT</button>
            </form>
        </div>
        </>
    )
}