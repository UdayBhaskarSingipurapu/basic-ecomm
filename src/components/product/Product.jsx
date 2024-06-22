import React from 'react'
import { useContext } from 'react'
import { userLoginContext } from '../../contexts/userLoginContext';

function Product(props) {

let proObj=props.proObj

let {currentUser}=useContext(userLoginContext)

async function addProductToCart(proObj){
  proObj.username=currentUser?.username;
  let res=await fetch('http://localhost:3000/add-cart',{
    method:"POST",
    headers:{"Content-type": "application/json"},
    body:JSON.stringify(proObj)
  })
  if(res.status===201) {
    console.log('Product added to cart');
  }

}

  return (
    
      <div className="card text-center h-100 bg-light border border-dark">
        <div className="card-body d-flex flex-column justify-content-between">
              <p className="fs-3 text-secondary">{proObj.title}</p>
              <p className="fs-3 text-primary">{proObj.brand}</p>
              <p className="lead">{proObj.description}</p>
              <p className="fs-3 text-warning">${proObj.price}</p>
              <button className="btn btn-success" onClick={()=>addProductToCart(proObj)}>Add to cart</button>
        </div>
      </div>
    
  )
}

export default Product