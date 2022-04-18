import {useContext, useEffect, useRef, useState} from 'react'
import { Context } from '../Store';
import {CatalogItem} from './CatalogItem'
import {FilterModal} from './FilterModal'

export const Catalog = () => {
  const ul = useRef();
  const [data, setData] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterValue, setFilterValue] = useState('default')
  const {searchValue} = useContext(Context)
  const [defaultData, setDefaultData] = useState([]);

  const handlePrevNext = (direction) => {
    const li = [...ul.current.children];
    const liFirst = li[0];
    
    const liFirstWidth = liFirst.offsetWidth;
    const liFirstMR = parseInt(window.getComputedStyle(liFirst).marginRight)
    const liFirstML = Math.abs(parseInt(window.getComputedStyle(liFirst).marginLeft))
    const liFullWidth = liFirstWidth + liFirstMR;
    const breakPoint = liFullWidth*li.length - ul.current.offsetWidth

    let ml = 0

    if (liFirstML < breakPoint + liFullWidth) {
      ml = liFirstML + (direction === "next" ? 1 : -1)*liFullWidth
    }

    liFirst.style.marginLeft = `-${ml}px`
  }

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              setData([...json])
              setDefaultData([...json])
            })
  },[])

  useEffect(() => {
    if(filterValue === 'abs'){
      const sortData = data.sort((a,b)=>{
        return a.price - b.price
      })
      setData(sortData)
    } else if (filterValue === 'desc') {
      const sortData = data.sort((a,b)=>{
        return b.price - a.price
      })
      setData(sortData)
    } else if (filterValue === 'default'){
      console.log(filterValue)
      console.log(defaultData)
      setData([...defaultData])
    }
  }, [filterValue])

  const openFilterModal = () => {
    setShowFilterModal(true)
  }

  return(
    <>
      <div className="main__nav">
        <div className="main__filter">
          <div className="main__filter__name">Best Sellers</div>
          <button className="main__filter__btn" onClick={()=>{openFilterModal()}}></button>
          {showFilterModal && <FilterModal setShowFilterModal={setShowFilterModal} filterValue={filterValue} setFilterValue={setFilterValue} />}
        </div>
        <div className="main__setting__btn">            
          <button className="main__setting__btn-prev" onClick={() => handlePrevNext('prev')} ><img src='./image/left.svg'/></button>
          <button className="main__setting__btn-next" onClick={() => handlePrevNext('next')}><img src='./image/right.svg'/></button>
        </div>
      </div> 
      <div className="catalog">
        
        {data.length > 0 ? <ul ref={ul} className="catalog__items">
            {data.filter(({title}) => title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((product ,index) => {
              return  <CatalogItem key={index} product={product}/>
            })}
           
          </ul> : <h3>Loading.....</h3> }
          
        </div>
  </>
  )
}