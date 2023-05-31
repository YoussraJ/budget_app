import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 
import './Currency.css';
const Currency=()=>{
    const {dispatch}=useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <select className="custom-select" id="inputGroupSelect01"  style={{backgroundColor:'#93C572',width:'100%',color:'#ffffff',fontWeight:'bold' ,fontSize:'1rem'}} defaultValue="£" onChange={(e)=>{dispatch({

                type:'CHG_CURRENCY',
                payload:e.target.value
            })}}>
            
                        <option value="$" name="Dollar" className='opt'> Dollar$</option>
                        <option  value="£" name="Pound" >Pound£</option>
                        <option value="€" name="Euro" >Euro€</option>
                        <option value="₹" name="Ruppee" >Ruppee₹</option>
                        
                </select>
        </div>
    );
}
export default Currency;