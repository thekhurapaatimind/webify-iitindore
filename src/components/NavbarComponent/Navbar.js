import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {
  // polygon clip path
  const clipFactor = 8;
  const clipPath = `polygon(0 0, 100% 0, ${100 - clipFactor}% 100%, ${clipFactor}% 100%)`
  const [bgColor, setBgColor] = useState('transparent');
  const [logoColor, setLogoColor] = useState('rgb(0, 187, 255)');
  const height = 100;
  //turning navbar to solid color
  window.addEventListener('scroll', () => {
    if (window.scrollY > height) {
      setBgColor('rgb(0, 187, 255)')
      setLogoColor('white');
    } else {
      setBgColor('transparent')
      setLogoColor('rgb(0, 187, 255)');
    }
  })
  // mobile navbar
  const [click, setClick] = useState(false)
  const handleClick = () => {
    // console.log(click);
    setClick(!click)
  }

  return (
    <>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{
          position: 'fixed',
          zIndex: '100',
          width: '100%',
        }}
      >
        <div
          className='container d-flex justify-content-center align-items-center gap-5 px-5 py-2'
          style={{
            backgroundColor: bgColor,
            clipPath: clipPath,
            transition: 'all 0.5s ease',
          }}
        >
          {/* container left */}
          <div
            className={`horizontal gap-3`}
          >
            <Link
              to='/'
              className='text-decoration-none'
            >
              Home
            </Link>
            <Link
              to='/genre/animation'
              className='text-decoration-none'
            >
              Animation
            </Link>
            <Link
                   to='/genre/action'
              className='text-decoration-none'
            >
              Action
            </Link>
          </div>
          {/* logo */}
          <div>
            <Link
              to='/'
              className='text-decoration-none text-inherit navbar-logo'
              style={{color: logoColor}}
            >
              {/* <img
             src={logo}
              alt="logo"
              style={{
                width: '200px',
              }}

                /> */}
              MOVIEMANIA
            </Link>
          </div>
          {/* container right */}
          <div
            className={`horizontal gap-3 ${click ? "active" : ""}`}
          >
            <Link
              to='/genre/horror'
              className='text-decoration-none'
            >
              Horror
            </Link>
            <Link
               to='/genre/mystery'
              className='text-decoration-none'
            >
              Mystery
            </Link>
            <Link
                  to='/genre/romcom'
              className='text-decoration-none'
            >
              Rom-Com
            </Link>
          </div>
          {/* mobile navbar */}
          <div className="nav-icon" onClick={handleClick}>
            <i style={{ color: logoColor }} className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </div>
      <div className={click ? "mobile-nav active" : "mobile-nav"}>
        <Link to="/" className="text-decoration-none" onClick={handleClick}>
          Home
        </Link>
        <Link to="/" className="text-decoration-none" onClick={handleClick}>
          Home
        </Link>
        <Link to="/" className="text-decoration-none" onClick={handleClick}>
          Home
        </Link>
        </div>
    </>
  )
}

export default Navbar