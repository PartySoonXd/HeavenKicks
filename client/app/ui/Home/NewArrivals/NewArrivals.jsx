"use client"

import { useState } from "react"

import Products from "@/app/components/Products/Products"
import PrettyButton from "@/app/components/PrettyButton/PrettyButton"

export default function NewArrivals() {
    const [pagination, setPagination] = useState()
    return (
        <div className="new-arrivals">
            <h2 className="h2 new-arrivals-title">NEW ARRIVALS</h2>
            <Products setPagination={setPagination} pageSize={4} newArrival={true}/>
            <div className="new-arrivals-pretty-button-container">
                <PrettyButton url="/new-arrivals" text="see all"/>
            </div>
        </div>
    )
}