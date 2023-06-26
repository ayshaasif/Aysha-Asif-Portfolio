import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import  Contact from './components/contact/Contact'
import  Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
// import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'

const App = ()=>{
    return(
      <div id="App">
         <Header/>
         <Nav/>
         <About/>
         <Experience/>
         <Services/>
         {/* <Portfolio/> */}
         <Contact/>
         <Footer/>
      </div>
    )
}

export default App