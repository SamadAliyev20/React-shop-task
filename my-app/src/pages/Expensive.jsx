import React from 'react'
import UserItem from '../components/UserItem'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Expensive = () => {
  const [products,setProducts]= useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')     
      setProducts(response.data)
    }
    getItems();
   },[])
  return (
    <div className="container">
      <div className="row">
      {
          products && products.map(prod => {
            if (prod.price > 100) {
              return(
                <UserItem pr={prod}/>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Expensive