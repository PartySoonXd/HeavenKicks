"use client"

import { useEffect, useState } from "react"
import Question from "./Question"
import { $apiHost } from "@/app/http"

export default function Questions() {
    const [questions, setQuestions] = useState()
    useEffect(() => {
        const getQuestions = async() => {
            try {
                await $apiHost.get('/api/faq?populate=items').then(({data}) => {
                    setQuestions(data.data.attributes.items)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getQuestions()
    }, [])
    return (
        <div className="questions">
            {
                questions && Object.keys(questions).map(item => {
                    return (
                        <Question question={questions[item].question} answer={questions[item].answer} key={item}/>
                    )
                })
            }
        </div>
    )
}