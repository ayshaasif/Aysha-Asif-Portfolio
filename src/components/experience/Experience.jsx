import React from 'react'
import './experience.css'
import CircularSkill from './CircularSkill'

const Experience = () => {
    return (
        <section id="experience">
            <h3 className="experience_header">Tech I Can Work With</h3>
            <div className="container experience_container">
               <CircularSkill skillrange="111" skill="Python / Django"/>
               <CircularSkill skillrange="90" skill="Java"/>
               <CircularSkill skillrange="80" skill="Machine-Learning"/>
                <CircularSkill skillrange="80" skill="Artificial-Intelligence"/>
               <CircularSkill skillrange="20" skill="HTML/CSS"/>
                <CircularSkill skillrange="20" skill="Javascript / jQuery / ReactJs"/>
                <CircularSkill skillrange="20" skill="App Development"/>
                <CircularSkill skillrange="20" skill="Database Management - MySQL"/>
               <CircularSkill skillrange="175" skill="DataScience"/>
               <CircularSkill skillrange="150" skill="C++"/>
                <CircularSkill skillrange="190" skill="C# - ASP.NET"/>

            </div>
        </section>
    )
}

export default Experience 