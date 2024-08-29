import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {
  const [play, setplay] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'Our Program' title = 'What We Offer'/>
      <Program/>
      <About setplay={setplay}/>
      <Title subTitle = 'Gallery' title = 'Campus Photos'/>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title = 'What Students Says'/>
      <Testimonials/>
      <Title subTitle = 'Contact Us' title = 'Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer play={play} setplay={setplay}/>
    </div>
  )
}

export default App
