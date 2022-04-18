
export const getCartData = () => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

export const addToCart = (product, cart, setCart) => {
    let findIndex = cart.findIndex(({id}) => id === product.id )
    if( findIndex !== -1) {
        cart[findIndex].count += 1
    } else {
        product.count = 1
        cart.push(product)
    }
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart))
    setCart([...cart])
}