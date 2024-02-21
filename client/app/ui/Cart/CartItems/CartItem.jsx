import Image from "next/image";

export default function CartItem({imageURL, size, price, title, id}) {
    return (
        <li className="cart-item">
            <img src={process.env.NEXT_PUBLIC_ASSETS_URL + imageURL} alt={`${title} photo`} className="cart-item-image"/>
            <div className="cart-item-info">
                <h3 className="h3 cart-item-title">
                    {title}
                    <button type="button" className="delete-button">
                        <Image src="/delete-icon.svg" width={40} height={40} alt="delete button"/>
                    </button>
                </h3>
                <h3 className="h3 cart-item-size"><span>Size:</span> {size}</h3>
                <h3 className="h3 cart-item-price"><span>Price:</span> {price}$</h3>
            </div>
        </li>
    )
}