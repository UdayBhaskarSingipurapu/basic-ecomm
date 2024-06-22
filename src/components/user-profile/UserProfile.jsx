import React from 'react'
import { useContext } from 'react'
import { userLoginContext } from '../../contexts/userLoginContext'
import { Link } from 'react-router-dom'
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  let {currentUser}=useContext(userLoginContext)
  let navigate=useNavigate()
  function onEditUser(){
    navigate('../edit-user')
  }
  return (
    <div>
      <div className="text-end p-2">
        <img src={currentUser?.image} width='75px' className='rounded-circle' />
        <p className='fs-3'>{currentUser?.username} <FaRegEdit className='text-warning fs-2' onClick={onEditUser} /></p>
      </div>
      {/*links to products and cart*/}
      <ul className='nav fs-5 p-3 justify-content-around my-1'>
        <li className="nav-item">
            <Link to="products" className="nav-link text-dark">
              < AiFillProduct className="fs-3 text-info " /> Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="cart" className="nav-link text-dark">
              <FaShoppingCart className="fs-3 text-info " />
              Cart
            </Link>
          </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default UserProfile