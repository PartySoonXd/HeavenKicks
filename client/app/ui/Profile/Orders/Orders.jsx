"use client"

import PrettyButton from "@/app/components/PrettyButton/PrettyButton"

export default function Orders({orders}) {
    const getTotalPrice = (products) => {
        let total = 0
        products.data.map(({attributes}) => {
            total += attributes.price
        })
        return total
    }
        
    return (
        <div className="orders">
            <h2 className="h2">ORDERS</h2>
            {orders.length == 0 && 
            <div className="orders-no-orders">
                <h3 className="h2">You have no orders yet.</h3>
                <PrettyButton text="GO TO CATALOG" url="/catalog"/>
            </div>
            }
            <ul className="orders-list">
                {!(orders.length == 0) && orders.map((item) => {
                    return( 
                        <li className="orders-item" key={item.sessionId}>
                            <div className="orders-item-header">
                                <h3 className="h3">Status: <span>{item.status}</span></h3>
                                <h3 className="h3">Total: <span>{getTotalPrice(item.products)}</span>$</h3>
                            </div>
                            <div className="orders-products">
                                {item.products.data.map(({attributes, id}) => {
                                    return (
                                        <div className="orders-product" key={id}>
                                            <img src={process.env.NEXT_PUBLIC_ASSETS_URL + attributes.imageURL} alt="product image"/>
                                            <h4 className="h4">{attributes.title}</h4>
                                            <div className="orders-product-footer">
                                                <p className="links">size: <span>{attributes.size}</span></p>
                                                <p className="links">price: <span>{attributes.price}</span>$</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}