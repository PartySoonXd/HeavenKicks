import Image from "next/image"

export default function ProductInfo({info}) {
    return (
        <div className="product-info">
            <h1 className="product-info-title h2">{info.title}</h1>
            <h2 className="product-info-price">
                <div className="product-info-price-container">
                    {info.price}
                    <span>$</span>
                </div>
                <span className="line"></span>
            </h2>
            <div className="product-info-sizes">
                <h3 className="product-info-subtitle h3">Size</h3>
                <ul className="product-info-sizes-list">
                    {Object.keys(info.sizes).map(item => {
                        return(
                            <li className="product-info-sizes-item links" key={info.sizes[item]}>
                                {info.sizes[item]}
                            </li>
                        )
                    })}
                </ul>
                <button type="button" className="product-info-button links">
                    ADD TO CART
                    <Image src="/add-to-cart-icon-white.svg" width={40} height={40} alt="add to cart"/>
                </button> 
            </div>
            <div className="product-info-description">
                <h3 className="product-info-subtitle h3">Description</h3>
                <p className="p product-info-description-text">{info.description}</p>
            </div>
        </div>
    )
}