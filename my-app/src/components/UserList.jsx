import React from 'react'
import UserItem from './UserItem'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Expensive from '../pages/Expensive';

const override = {
  display: "block",
  position:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-4%,-50%)"
};


const UserList = () => {

   const [products,setProducts]= useState([]);
   const [filter,setFilter]=useState(products)
   const [loading,setLoading]=useState(true); 
   

   useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')     
      setProducts(response.data)
      setFilter(response.data)
      setLoading(false)
    }
    getItems();
   },[])

   const filterProduct = (cat) =>{
    const updatedList=products.filter((x)=> x.category === cat);
    setFilter(updatedList)
   }
   

   const ShowProducts = () =>{
   return(
    <>
     <div className="buttons display-6 text-center">
      <button className="btn btn-outline-dark me-2" onClick={() =>{
        setFilter(products)}}>ALL</button>
      <button className="btn btn-outline-dark me-2" onClick={() =>{
        filterProduct("men's clothing")}}>Men's  Clothing</button>
      <button className="btn btn-outline-dark me-2" onClick={() =>{
        filterProduct("women's clothing")}}>Women's  Clothing</button>
      <button className="btn btn-outline-dark me-2"onClick={() =>{
        filterProduct("jewelery")}}>Jewelery</button>
      <button className="btn btn-outline-dark me-2"onClick={() =>{
        filterProduct("electronics")}}>Electronic</button>
    </div>
    
    </>
   )
   }
    return (
   

      <div className="container">
      <div className="row">
      <ShowProducts />
        
       
      {
          loading ? <ScaleLoader
          color='red'
          loading={loading}
          cssOverride={override}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />:
        
         
         filter && filter.map(item => {
              return(
                  
                  <UserItem pr={item}/>
              )
          })
        }
        </div>
        </div>
)
   }

export default UserList