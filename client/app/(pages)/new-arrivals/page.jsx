"use client"

import { useState } from "react";

import PageIntro from "@/app/components/PageIntro/PageIntro";
import Products from "@/app/components/Products/Products";
import PrettyButton from "@/app/components/PrettyButton/PrettyButton";
import IndexLayout from "@/app/components/IndexLayout/IndexLayout";

export default function NewArrivals() {
    const [pagination, setPagination] = useState()

    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="New arrivals" image="/new-arrivals-intro.jpg"/>
            <div className="new-arrivals-container" style={{margin: "30px 0 40px 0"}}>
                <Products setPagination={setPagination} pageSize={40} newArrival={true}/>
            </div>
            <div className="new-arrivals-button-container" style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "70px"
            }}>
                <PrettyButton url="/catalog" text="GO TO CATALOG"/>
            </div>
        </main>
        </IndexLayout>
    )
}