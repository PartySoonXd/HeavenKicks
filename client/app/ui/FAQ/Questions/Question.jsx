"use client"

import { useState } from "react"

export default function Question({question, answer}) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="question">
            <div className="question-header">
                <p className="links question-text">{question}</p>
                <button type="button" onClick={() => setIsActive(!isActive)}>
                    <span className={`cross ${isActive && "active"}`}></span>
                </button>
            </div>
            {isActive && <p className="p question-answer">{answer}</p>}
        </div>
    )
}