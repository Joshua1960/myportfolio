import React, { Component } from 'react';
import Logo from '../image/delis_logo.png';
import Dropdown from './Dropdown';
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>

export default class Navbar extends Component {
  render() {
    return (
      <div className='bg-black flex justify-between xl:px-16 px-6 py-6 items-center'>
        <div className='w-12 xl:w-34'><img src={Logo} alt="logo" /></div>
        {/* Navbar menu */}
        <div className='items-center font-medium text-white xl:flex justify-evenly w-5/12 md:w-1/2 hidden md:flex'>
          <a href="./"><div className='text-white hover:text-lime-500'>Home</div></a>
          <a href="#about"><div className='text-white hover:text-lime-500'>About</div></a>
          <a href="#portfolio"><div className='text-white hover:text-lime-500'>Portfolio</div></a>
          <a href="#skills"><div className='text-white hover:text-lime-500'>Skills</div></a>
          <a href="#contact"><div className='text-white hover:text-lime-500'>Contact</div></a>
          <button className="w-36 flex-col px-6 py-3 font-light text-black bg-maincolour rounded-xl hover:bg-white"> Let's Talk</button>
        </div>
        {/* Navbar menu */} 
        {/* Dropdown */}
        <Dropdown />
        {/* Dropdown */}
      </div>
    )
  }
}
