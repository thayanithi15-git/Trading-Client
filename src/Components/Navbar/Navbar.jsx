import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Styles/navbar.css'
import { FaApple } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/logo.jpg"

export default function Navbar() {

  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const hamburger = () => {
    setClicked(!clicked);
  }

  return (
    <div className={`navbar ${clicked ? "active" : ""}`}>
      <div className='navbar-container'>
        <div className="logo-container">
          <div className='logo'>
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="nav-links">
          <ul>
            <li onClick={()=> navigate('/')}>About</li>
            <li onClick={()=> navigate('/update')}>Updates</li>
            {/* <li onClick={()=> navigate('/analysis')}>Analysis</li> */}
            <li onClick={()=> navigate('/support')}>Support</li>
            <li className='nav-book-button' onClick={()=> navigate('/book-a-call')}>Book a call</li>
          </ul>
        </div>
      </div>
      <div className="hamburger" onClick={hamburger}>
        {
          clicked? (< IoClose size={35}/>): (< GiHamburgerMenu size={35}/>)
        }
      </div>
    </div>
  )
}
