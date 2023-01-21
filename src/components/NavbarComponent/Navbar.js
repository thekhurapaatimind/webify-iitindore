import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import logo from '../../assets/navbar-brand2.png'

function Navbar() {
  // polygon clip path
  const factor = 8;
  const clipPath = `polygon(0 0, 100% 0, ${100 - factor}% 100%, ${factor}% 100%)`
  const [bgColor, setBgColor] = useState('transparent');
  var height = window.innerHeight;
  //turning navbar to solid color
  window.addEventListener('scroll', () => {
    if (window.scrollY > height) {
      setBgColor('rgb(0, 0, 0, 0.8)')
    } else {
      setBgColor('transparent')
    }
  })

  return (
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
          clipPath: clipPath
        }}
      >
        {/* container left */}
        <div
          className='d-flex gap-3'
        >
          <Link
            to='/'
            className='text-decoration-none text-light'
          >
            Home
          </Link>
          <Link
            to='/'
            className='text-decoration-none text-light'
          >
            Home
          </Link>
          <Link
            to='/'
            className='text-decoration-none text-light'
          >
            Home
          </Link>
        </div>
        {/* logo */}
        <div>
          <Link
            to='/'
            className='text-decoration-none text-inherit'
            style={{
              fontSize: bgColor === 'transparent' ? '2rem' : '1.5rem',
              color: "rgb(0, 187, 255)",
              fontWeight: '600',
              // textShadow: 'rgb(255, 255, 255, 0.5)'
            }}
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
          className='d-flex gap-3'
        >
        <Link
            to='/'
            className='text-decoration-none text-light'
          >
            Home
          </Link>
          <Link
            to='/'
            className='text-decoration-none text-light'
          >
            Home
          </Link>
          <Link
            to='/'
            className='text-decoration-none text-light'
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar