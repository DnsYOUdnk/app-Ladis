import { useContext } from 'react';
import {Link} from 'react-router-dom';
import basket from '../image/basket.svg'
import { Context } from '../Store';
import { SearchInput } from './SearchInput'
export const Header = () => {
  const { cart } = useContext(Context)
  const getCartCount = () => {
    let count = 0;
    if(cart.length === 0) {
      return count
    } else {
      count = cart.reduce((defCount, item) => defCount + item.count, count)
      return count
    }
  }
    return(
        <header className='header'>
          <div className="header__logo">
             <Link to='/'>Ladies</Link>
          </div>
          <div className="header__widget">
              <SearchInput />
              <Link to='/cart'><img src={basket} alt="cart" />{getCartCount()}</Link>
          </div>
        </header>
  )
}
