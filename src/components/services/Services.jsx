import React from 'react'
import './services.css'
import Project from './Project.jsx'
import Candy from '../../assets/candy-crush-saga-candies.png'
import SkillSetWebsite from '../../assets/SkillsetSearchform.jpg'
import JavaSql from '../../assets/Java-Mysql.jpg'
import DjangoCrud from '../../assets/django-crud.jpg'
import DSprojects from '../../assets/DSProjects.png'
import cryptsio from '../../assets/cryptsio.png'
const Services = () => {
   
    let projectDetails = [
        `developed the famous Candy Crush using Vanilla Javascript, HTML,CSS`,

        `Vaccination booking system for managemingappointments ,pre booking of vaccine, 
                        using Java GUI integrated with  MySQL , XAMPP Server`,

        `MediaPipe - POSE DETECTION
        DeepFake detection using Transfer learning - Python - TensorFlow, PyTorch, Matplotlib, seaborn, pandas`,

        `Django based Applications, Chat Portal using Django-channels , Django Rest Framework APIs`,

        `Built using PHP MySQL. This project was developed to ease the 
                    efforts of the faculty to filter students based on their skills`,

        `Etherium - blockchain Android Application 
        send etheriums from one account to another , view your transactions, connected to Google Firebase`
    ]

    let links = [
        'https://github.com/ayshaasif/FirstProject',
        'https://github.com/ayshaasif/VaccinationSystem.git',
        '',
        'https://github.com/ayshaasif/DjangoChatApp',
        'https://github.com/ayshaasif/SKILL-SET-WEBSITE',
        'https://github.com/ayshaasif/Cryptsio'
    ]
    return (
        <section id="services">
            <h4><u>Projects</u></h4>
            <div className="container">
              <Project ProjectName="Web Development Projects - Candy Crush" link= {links[0]} ProjectImage={Candy} ProjectDetail={projectDetails[0]} />  
              <Project ProjectName="Vaccination Booking System" link= {links[1]} ProjectImage={JavaSql} ProjectDetail={projectDetails[1]} />  
              <Project ProjectName="Data Science Projects " link= {links[2]} ProjectImage={DSprojects} ProjectDetail={projectDetails[2]}/>  
              <Project ProjectName="Django Projects " link= {links[3]} ProjectImage={DjangoCrud} ProjectDetail={projectDetails[3]} />  
              <Project ProjectName="Student Record Management System " link= {links[4]}  ProjectImage={SkillSetWebsite} ProjectDetail={projectDetails[4]} />  
              <Project ProjectName="CRYPTSIO" link= {links[5]}  ProjectImage={cryptsio} ProjectDetail={projectDetails[5]}/>  
            </div>
        </section>
    )
}

export default Services 