"use client"

import { useState } from "react";

import IndexLayout from "@/app/components/IndexLayout/IndexLayout";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Products from "@/app/components/Products/Products";
import Filters from "@/app/ui/Catalog/Filters/Filters";
import Options from "@/app/ui/Catalog/Options/Options";
import Pagination from "@/app/ui/Catalog/Pagination/Pagination";
import { useSearchParams } from "next/navigation";

export default function Catalog() {
    const [isActive, setIsActive] = useState(false)

    const [filters, setFilters] = useState()
    const [sort, setSort] = useState()
    const [search, setSearch] = useState()
    const [pagination, setPagination] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    const searchParams = useSearchParams()
    const brand = searchParams.get('brand')
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Catalog" image="/catalog-intro.jpg"/>
            <div className="catalog-container" style={{display: "flex", margin: "30px 0 50px 0"}}>
                <div className="left-container" style={{flexGrow: 1, position: "relative"}}>
                    {<Filters isActive={isActive} setIsActive={setIsActive} setFilters={setFilters}/>}
                </div>
                <div className="right-container" style={{
                    maxWidth: "1025px",
                    minHeight: "70vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Options setIsActive={setIsActive} setSearch={setSearch} setSort={setSort}/>
                    <Products 
                        className="catalog" 
                        filters={filters} 
                        sort={sort} 
                        search={search} 
                        setPagination={setPagination} 
                        page={currentPage}
                        brand={brand}
                    />
                    {pagination && 
                    <Pagination 
                        pagination={pagination} 
                        setCurrentPage={setCurrentPage} 
                        currentPage={currentPage}
                    />}
                </div>
            </div>
        </main>
        </IndexLayout>
    )
}