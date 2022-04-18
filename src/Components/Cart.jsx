export const Cart = () => {
    const dataCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];


    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul className="cart__products">
                {dataCart.map((product, index) => {
                    return  <li className="cart__product" key={index}>
                                <div className="cart__product__img"><img src={product.image} alt="#" /></div>
                                <div className="cart__product__title">{product.title}</div>
                                <div className="cart__product__count">{product.count}</div>
                                <div className="cart__product__price">{product.price}</div>
                            </li>
                })}
            </ul>
        </div>
    )
}