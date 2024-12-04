import React, { Component } from 'react';
import Logo from '../image/delis_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown';

export default class Navbar extends Component {
  render() {
    return (
      <div className='bg-stone-900 flex justify-between xl:px-16 px-6 py-6 items-center'>
        <div className='w-12 xl:w-34'><img src={Logo} alt="logo" /></div>
        {/* Navbar menu */}
        <div className='items-center font-medium text-white xl:flex justify-between w-5/12 md:w-1/2 hidden md:flex'>
          <a href="./"><div className='text-white hover:text-lime-500'>Home</div></a>
          <a href="#about"><div className='text-white hover:text-lime-500'>About</div></a>
          <a href="#portfolio"><div className='text-white hover:text-lime-500'>Portfolio</div></a>
          <a href="#skills"><div className='text-white hover:text-lime-500'>Skills</div></a>
          <a href="#contact"><div className='text-white hover:text-lime-500'>Contact</div></a>
        </div>
        {/* Navbar menu */} 
        <div className='text-white flex items-center gap-4 font-medium text-sm tracking-widest xl:text-base md:flex hidden'>LET'S TALK<FontAwesomeIcon icon={faBars} className='rounded-full bg-lime-500 p-3' /></div>
        {/* Dropdown */}
        <Dropdown />
        {/* Dropdown */}
      </div>
    )
  }
}
