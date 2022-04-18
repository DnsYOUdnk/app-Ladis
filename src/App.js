import React, {useState} from 'react'
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import '../src/css/style.css'
import { Context } from './Store/index'
import { addToCart, getCartData } from './utils/index'

export const App = () => {
  const cartData = getCartData();
  const [cart, setCart] = useState(cartData);
  const [searchValue, setSearchValue] = useState('')

  return (
    <Context.Provider value={{ addToCart, cart, setCart, searchValue, setSearchValue }} >
      <div className="App">
        <Header />
        <Main />      
      </div>
    </Context.Provider>
  );
}
