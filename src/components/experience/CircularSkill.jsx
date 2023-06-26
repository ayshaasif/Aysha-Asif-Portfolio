import React from 'react'


const CircularSkill = (props) => {
    return(
   
        <div className="skill">
            <div className="outer">
                <div className="inner"><div>{props.skill}</div></div>
            </div>

            <svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
               <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
               </linearGradient>
            </defs>
            <circle id = "circle" strokeDashoffset = {props.skillrange} cx="80" cy="80" r="70" strokeLinecap="round"  />
            </svg>

        </div>

        
    )
}

export default CircularSkill