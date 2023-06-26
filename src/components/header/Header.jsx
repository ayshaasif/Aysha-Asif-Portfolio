import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from "../../assets/me.png"
import HeaderSocial from './HeaderSocials'
import TypeWriter from './TypeWriter'

const Header = () => {
    return (
  <header>
      <div className="container header_container">
          <div className="typer-header">
              <h1 className="header-h">Hello , I am </h1>
              <h1 className="header-h">Aysha Asif<div className='dot'></div></h1>
              <TypeWriter/>
          </div>
          
           <CTA/>
           <HeaderSocial/>
           <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
  </header>
    )
}

export default Header