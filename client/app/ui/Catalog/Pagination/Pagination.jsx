"use client"

import Image from "next/image"

export default function({pagination, setCurrentPage, currentPage}) {
    return (
        <div className="pagination">
            <button 
                type="button" 
                disabled={currentPage === 1} 
                onClick={() => setCurrentPage(currentPage-1)} 
                className="minus-arrow"
            >
                <Image src="/arrow-icon.svg" width={35} height={15} alt="pagination button"/>
            </button>
            <ul className="pagination-list">
                {pagination && [...Array(pagination.pageCount)].map((item, i) => {
                    return (
                        <li className={`pagination-item h4 ${currentPage === i+1 && "active"}`} key={i}>{i+1}</li>
                    )
                })}
            </ul>
            <button 
                type="button" 
                disabled={currentPage >= pagination.pageCount} 
                onClick={() => setCurrentPage(currentPage+1)} 
                className="plus-arrow"
            >
                <Image src="/arrow-icon.svg" width={35} height={15} alt="pagination button"/>
            </button>
        </div>
    )
}