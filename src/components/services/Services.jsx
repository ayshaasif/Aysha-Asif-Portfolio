import React from 'react'
import './services.css'
import Project from './Project.jsx'
import Candy from '../../assets/candy-crush-saga-candies.png'
import SkillSetWebsite from '../../assets/SkillsetSearchform.jpg'
import JavaSql from '../../assets/Java-Mysql.jpg'
import DjangoCrud from '../../assets/django-crud.jpg'
import DSprojects from '../../assets/DSProjects.png'

const Services = () => {

    let projectDetail_student_record = `Built using PHP MySQL. This project was developed to ease the 
    efforts of the faculty to filter students based on their skills.`

    let projectDetail_vaccination_booking_system = `Built a vaccination booking system to facilate management of appointments and pre booking of 2nd dose of vaccine 
    ,Developed using Java GUI integrated with  MySQL Database set up using XAMPP Server.`

    let projectDetail_Candy_crush = `developed the famous Candy Crush using Vanilla Javascript, HTML,CSS`


    let links = [
        'https://github.com/ayshaasif/FirstProject',
        'https://github.com/ayshaasif/VaccinationSystem.git',
        '',
        'https://github.com/ayshaasif/DjangoChatApp',
        'https://github.com/ayshaasif/SKILL-SET-WEBSITE'
    ]
    return (
        <section id="services">
            <h4>Projects</h4>
            <div className="container">
              <Project ProjectName="Web Development Projects - Candy Crush" link= {links[0]} ProjectImage={Candy} ProjectDetail={projectDetail_Candy_crush} />  
              <Project ProjectName="Vaccination Booking System" link= {links[1]} ProjectImage={JavaSql} ProjectDetail={projectDetail_vaccination_booking_system} />  
              <Project ProjectName="Data Science Projects " link= {links[2]} ProjectImage={DSprojects} ProjectDetail= {projectDetail_student_record} />  
              <Project ProjectName="Django Projects " link= {links[3]} ProjectImage={DjangoCrud} ProjectDetail= {projectDetail_student_record} />  
              <Project ProjectName="Student Record Management System " link= {links[4]}  ProjectImage={SkillSetWebsite} ProjectDetail= {projectDetail_student_record} />  

            </div>
        </section>
    )
}

export default Services 