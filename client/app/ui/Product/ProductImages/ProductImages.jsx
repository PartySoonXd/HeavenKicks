"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProductImages({images}) {
    const [preview, setPreview] = useState(images[0])
    return (
        <div className="product-images">
            <img src={process.env.NEXT_PUBLIC_ASSETS_URL + preview.formats.medium.url} className="product-images-preview"/>
            <div className="product-images-thumbnails">
                {Object.keys(images).map(item => {
                    if (images[item].name === preview.name) {
                        return
                    } else {
                        return <img 
                            src={process.env.NEXT_PUBLIC_ASSETS_URL + images[item].formats.small.url} 
                            onClick={(e) => setPreview(images[item])}
                            key={item}
                        />
                    }
                })}
            </div>
        </div>
    )
}