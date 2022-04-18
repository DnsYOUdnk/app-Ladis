import { Routes, Route } from 'react-router-dom'
import { Catalog } from './Catalog';
import { Cart } from './Cart'
import { Product } from './Product'
import { NotFound } from './NotFound';

export const Main = () => {
    return(
      <main className="main">     
         <Routes>
           <Route path="/" element={<Catalog />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/product/:id" element={<Product />} />
           <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      )
}