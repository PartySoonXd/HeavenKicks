"use client"

import { useEffect, useState } from "react"
import Question from "./Question"
import { $apiHost } from "@/app/http"

export default function Questions() {
    const [questions, setQuestions] = useState()
    useEffect(() => {
        const getQuestions = async() => {
            try {
                await $apiHost.get('/api/faqs').then(({data}) => {
                    setQuestions(data.data)
                })
            } catch (error) {
                
            }
        }
        getQuestions()
    }, [])
    return (
        <div className="questions">
            {
                questions && Object.keys(questions).map(item => {
                    return (
                        <Question question={questions[item].attributes.question} answer={questions[item].attributes.answer} key={item}/>
                    )
                })
            }
        </div>
    )
}