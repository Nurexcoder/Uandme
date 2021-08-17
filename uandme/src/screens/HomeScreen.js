import React from 'react'
import data from '../data';
import  Product  from "../MyComponent/Product";



export const HomeScreen = () => {
    return (
        <div>
             <div className="row center">
        {data.products.map( (product) => (
           <Product key={product._id} product={product}></Product>
          ))}
         </div>         
        </div>
    )
}
