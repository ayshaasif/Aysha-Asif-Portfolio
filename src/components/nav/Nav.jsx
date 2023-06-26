import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {IoBookmarksOutline} from 'react-icons/io5' 
import { MdMessage} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  // currentstate , updated state = useState(default state)
   const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
          <a href="#" onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
          <a href="#about" onClick = {() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
          <a href="#experience" onClick = {() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><IoBookmarksOutline/></a> 
          <a href="#services" onClick = {() => setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}><RiServiceLine/></a>
          <a href="#contact" onClick = {() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><MdMessage/></a>
        </nav>
        )
}

export default Nav