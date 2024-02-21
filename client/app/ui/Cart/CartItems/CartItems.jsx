import CartItem from "./CartItem"

export default function CartItems({items}) {
    return (
        <ul className="cart-items">
            {items && items.data.map(({attributes, id}) => {
                return <CartItem 
                    imageURL={attributes.imageURL}
                    size={attributes.size}
                    price={attributes.price}
                    title={attributes.title}
                    key={id}
                    id={id}
                />
            })}
        </ul>
    )
}