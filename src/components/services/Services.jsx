import React from 'react'
import './services.css'
import Project from './Project.jsx'
import Candy from '../../assets/candy-crush-saga-candies.png'
const Services = () => {

    let projectDetail_student_record = `Built using PHP MySQL. This project was developed to ease the 
    efforts of the faculty to filter students based on their skills.`

    let projectDetail_vaccination_booking_system = `Built a vaccination booking system to facilate management of appointments and pre booking of 2nd dose of vaccine 
    ,Developed using Java GUI integrated with  MySQL Database set up using XAMPP Server.`

    let projectDetail_Candy_crush = `developed the famous Candy Crush using Vanilla Javascript, HTML,CSS`
    return (
        <section id="services">
            <h4>Projects</h4>
            <div className="container">
              <Project ProjectName="Candy Crush" ProjectImage={Candy} ProjectDetail={projectDetail_Candy_crush} />  
              <Project ProjectName="Student Record Management System " ProjectImage={Candy} ProjectDetail= {projectDetail_student_record} />  
              <Project ProjectName="Vaccination Booking System" ProjectImage={Candy} ProjectDetail={projectDetail_vaccination_booking_system} />  
              <Project ProjectName="candy crush" ProjectImage={Candy} ProjectDetail='Vanilla Javascript Project, html,css' />  
            </div>
        </section>
    )
}

export default Services 