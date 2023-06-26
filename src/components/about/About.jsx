import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineVolunteerActivism} from 'react-icons/md'


const About = () => {
    return (
        <section id="about">
            <h5>Get To Know Me</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                
                <div className="about__content">
                   
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icons'/>
                            <h5>Computer Science And Engineering</h5>
                            <small>BTech</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icons'/>     
                            <h5>Graduating Batch</h5>
                            <small>2024</small>
                        </article>
                        <article className='about__card'>
                            <MdOutlineVolunteerActivism className='about__icons'/>
                            <h5>Student Volunteer</h5>
                            <small>Expo Volunteer</small>
                        </article>
                   </div> 
                   <p>
                       I am a Computer Science and Engineering Student,language  learning enthusiast and an avid tech geek.
                       I am an aspiring Web developer, living in Dubai,UAE and passionately working towards growth.

                   </p>
                    <a href="#contact" id = "btn-lets-talk" className='btn btn-dark'>
                              Let's Talk
                    </a>                
                </div>
            </div>
        </section>
    )
}

export default About 