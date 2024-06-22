import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from '../product/Product'

function Products() {
  let [products,setProducts]=useState([])

  async function getProducts(){
    let res=await fetch('http://localhost:3000/products')
    let proData=await res.json();
    setProducts(proData)
  }
  useEffect(()=> {getProducts()},[])
  return (
    <div>
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
      {
        products.map((proObj) =>   (
          <div className="col " key={proObj.id}>
            <Product proObj={proObj} />
          </div>
        )
      )
      }
     </div>
    </div>
  )
}

export default Products