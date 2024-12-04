"use client"

import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Pagination({pagination}) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    
    const handlePagination = (page) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", page)
        
        router.push(pathname + "?" + params.toString())
    }
    if (pagination.pageCount > 0) {
        return (
            <div className="pagination">
                <button 
                    type="button" 
                    disabled={pagination.page <= 1} 
                    onClick={() => handlePagination(pagination.page - 1)} 
                    className="minus-arrow"
                >
                    <Image src="/arrow-icon.svg" width={35} height={15} alt="pagination button"/>
                </button>
                <ul className="pagination-list">
                    {pagination && [...Array(pagination.pageCount)].map((item, i) => {
                        return (
                            <li 
                                className={`pagination-item h4 ${pagination.page === i+1 && "active"}`} 
                                key={i}
                                onClick={() => handlePagination(i+1)}
                            >{i+1}</li>
                        )
                    })}
                </ul>
                <button 
                    type="button" 
                    disabled={pagination.page >= pagination.pageCount} 
                    onClick={() => handlePagination(pagination.page + 1)} 
                    className="plus-arrow"
                >
                    <Image src="/arrow-icon.svg" width={35} height={15} alt="pagination button"/>
                </button>
            </div>
        )
    }
}