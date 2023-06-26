import React from 'react'


const Project = (props)=>{
    return(
        <div className='project__card'>
            <div className='card__thumbnail'>
                <img className='Project__Image' src={props.ProjectImage}/>
            </div>
            <div className='card-info'>
                <h5>{props.ProjectName}</h5>
                <p>{props.ProjectDetail}</p>
            </div>
            
        </div>
    )
}

export default Project;