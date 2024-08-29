import React from 'react'
import './About.css'
import About_img from '../../assets/images/about.png'
import Play_icon from '../../assets/images/play-icon.png'

function About({setplay}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={About_img} alt="" className='about-img' />
        <img src={Play_icon} alt=""  className='play-icon' onClick={()=>setplay(true)}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Laeders Today</h2>
        <p>Embark on a transformative educational journey with our's university's comprehensive education program.our cutting-edge curriculum is desidned to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education  </p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>

        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
