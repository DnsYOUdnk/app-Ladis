import { useContext } from "react";
import { Context } from "../Store";

export const SearchInput = () =>{
    const {setSearchValue} = useContext(Context)
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    
    return (
        <input type='text' onChange={(e)=>handleChange(e)} id='header__widget__value' placeholder='Serch'/>
    )
}