import React from 'react'


const Project = (props)=>{
    return(
        <div className='project__card'>


            <div className='card__thumbnail'>
                <img className='Project__Image' src={props.ProjectImage}/>
            </div>

            <div className='card-info'>
                <h5><a href={props.link}>{props.ProjectName}</a></h5>
                <p>{props.ProjectDetail}</p>
            </div>
            
        </div>
    )
}

export default Project;