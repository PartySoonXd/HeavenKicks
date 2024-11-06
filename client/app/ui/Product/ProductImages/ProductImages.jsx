"use client"

import { useState } from "react"

export default function ProductImages({images}) {
    const [preview, setPreview] = useState(images[0])
    return (
        <div className="product-images">
            <img src={process.env.NEXT_PUBLIC_ASSETS_URL + preview.attributes.formats.medium?.url} className="product-images-preview"/>
            <div className="product-images-thumbnails">
                {Object.keys(images).map(item => {
                    return <img 
                        src={process.env.NEXT_PUBLIC_ASSETS_URL + images[item].attributes.formats.small.url} 
                        onClick={(e) => setPreview(images[item])}
                        key={item}
                    />
                })}
            </div>
        </div>
    )
}