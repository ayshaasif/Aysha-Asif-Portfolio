import React from 'react'
import AyshaAsif_2022 from '../../assets/Aysha asif (2).pdf'

const CTA = () =>{
        return(
            <div className='cta'>
                <a href={AyshaAsif_2022} download className='btn'>Download CV</a>
                <a href="#contact" className='btn btn-dark'>Let's Talk</a>
            </div>
        )
}

export default CTA