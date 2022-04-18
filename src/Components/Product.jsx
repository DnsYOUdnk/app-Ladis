import { useEffect, useState, useContext } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Context } from '../Store/index'
export const Product = (props) => {
    const [product, setProduct] = useState({})
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();
    const params = useParams()
    const { id } = params
    const { addToCart, cart, setCart } = useContext(Context)


    useEffect (()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setProduct(json)
                setIsLoading(false)
            })
    }, [])
    
    const goHome = () => {
        navigate('/');
    }

    return(
        <>
            {isLoading ? <h3>Loading ....</h3> :
                    <div className="product__item">
                        <div className="product__item__img"><img src={product.image} alt="product" /></div>   
                        <div className="product__details">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p>{product.price}$ <button className="product__item__cart__btn" onClick={()=>addToCart(product, cart,setCart)}>addToCart</button>  </p>
                            <button onClick={()=>goHome()}>Home</button>
                        </div>                  
                    </div>}
        </>        
    )
}