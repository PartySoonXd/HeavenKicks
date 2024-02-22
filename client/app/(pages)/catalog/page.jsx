"use client"

import { useState } from "react";

import IndexLayout from "@/app/components/IndexLayout/IndexLayout";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Products from "@/app/components/Products/Products";
import Filters from "@/app/ui/Catalog/Filters/Filters";
import Options from "@/app/ui/Catalog/Options/Options";

export default function Catalog() {
    const [isActive, setIsActive] = useState(false)
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Catalog" image="/catalog-intro.jpg"/>
            <div className="catalog-container" style={{display: "flex", margin: "30px 0 50px 0"}}>
                <div className="left-container" style={{flexGrow: 1, position: "relative"}}>
                    {<Filters isActive={isActive} setIsActive={setIsActive}/>}
                </div>
                <div className="right-container" style={{
                    maxWidth: "1025px",
                    width: "100%",
                }}>
                    <Options setIsActive={setIsActive}/>
                    <Products className="catalog"/>
                </div>
            </div>
        </main>
        </IndexLayout>
    )
}