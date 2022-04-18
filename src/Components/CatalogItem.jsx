import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../Store/index' 

export const CatalogItem = ({product}) => {
  const {id, image, title, price, category} = product
  const history = useNavigate();

  const { addToCart, cart, setCart } = useContext(Context)
  const handleClick = () => {
    history(`/product/${id}`,{ state: {
      price,
      category }
    })
  }
    return (
        <li className="catalog__item">
              <div className="catalog__item__img"><img src={image} alt={title}/></div>
              <div className="catalog__caption">
                <div className="catalog__caption__name" onClick={()=>{handleClick()}}>{title}</div>
                <div className="catalog__caption__subname">{category}</div>
                <div className="catalog__caption__price">${price} $</div>
                <button id={id} onClick={()=>{addToCart(product, cart, setCart)}} className="catalog__caption__btn">+</button>
              </div>
        </li>
    )
}