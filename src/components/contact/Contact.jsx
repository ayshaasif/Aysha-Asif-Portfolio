import React,{useState} from 'react'
import AyshaAsif_2022 from '../../assets/Aysha asif (2).pdf'

import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {MdEmail,MdMarkAsUnread} from 'react-icons/md';

const Contact = () => {
    const host = window.location.origin;
    return (
        <section id="contact">
            <p>Get in Touch!</p>
            <div className="contact-container">
                <div>
                    <form className="contact-form" method='POST' action="https://formsubmit.co/c768f6b13fcc2ce1b18a0a47d2a12d65">
                        Name: <input type="text" name="input-name" className="input-name" required/>
                        <input type="hidden" name="_next" value= {host}/>
                        Email: <input type="email" name="input-email" className="input-email"  required/>
                        Enter Message: <textarea name="input-message" className="input-message" resizable="false" cols="30" rows="10">
                                        </textarea>
                        <button type = "submit" value="submit" id="contact-form-submit-btn" className="btn btn-secondary btn-dark">Send Message</button>
                    </form>
                </div>
                <div>
                       <p className='contact-me-info'> 
                            Consider me for building your new <b>Website</b> ...<br/>
                            and <br/> to <b>automate</b> the <i>boring</i> stuff.<br></br>

                            Take a look at some of my projects <br/>
                            ...or get to know me better :                            
                       </p>

                       <hr></hr>
                      <a id="downloadable-cv" href={AyshaAsif_2022} download className='btn'>Download CV</a>
                      <br>
                      </br><a id="email" href="" target="_blank"><MdEmail/><i>ayshaasif14@gmail.com</i></a>
                      <div className='SocialMediaLinks'>
                        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
                        <a href="http://github.com" target="_blank"><FaGithub/></a>
                      </div>
                </div>
              
            </div>
        </section>
    )
}

export default Contact