"use client"

import { useState, useRef, useEffect } from "react";

import IndexLayout from "@/app/components/IndexLayout/IndexLayout";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Products from "@/app/components/Products/Products";
import Filters from "@/app/ui/Catalog/Filters/Filters";
import Options from "@/app/ui/Catalog/Options/Options";
import Pagination from "@/app/ui/Catalog/Pagination/Pagination";
import { useSearchParams } from "next/navigation";

export default function Catalog() {
    const [isActive, setIsActive] = useState(false)

    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    
    const [filters, setFilters] = useState(params.toString())
    const [pagination, setPagination] = useState()

    const containerRef = useRef(null)

    useEffect(() => {
        if (isActive) {
            document.body.classList.add("no-scroll") 
        } else {
            document.body.classList.remove("no-scroll")
        }
    }, [isActive])

    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Catalog" image="/catalog-intro.webp"/>
            <div className="catalog-container" style={{display: "flex", margin: "30px 0 50px 0"}} ref={containerRef}>
                <div className="left-container" style={{flexGrow: 1}}>
                    {<Filters isActive={isActive} setIsActive={setIsActive} setFilters={setFilters}/>}
                </div>
                <div className="right-container" style={{
                    maxWidth: "1025px",
                    minHeight: "70vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Options setIsActive={setIsActive} setFilters={setFilters}/>
                    <Products 
                        className="catalog" 
                        filters={filters} 
                        setPagination={setPagination} 
                    />
                    {pagination && <Pagination pagination={pagination}/>}
                </div>
            </div>
        </main>
        </IndexLayout>
    )
}