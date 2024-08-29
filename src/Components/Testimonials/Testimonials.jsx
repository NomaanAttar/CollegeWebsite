import React, { useRef } from 'react'
import './Testimonials.css'
import Next_Icon from '../../assets/images/next-icon.png'
import Back_Icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'



function Testimonials() {

    const slider = useRef()
    let tx = 0 ;

    const slideForward = ()=>{
        if(tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translate(${tx}%)`
    }

    const slideBackward = ()=>{
        if(tx<0){
            tx +=25
        }
        slider.current.style.transform = `translate(${tx}%)`
    }

  return (
    <div className='textimonials' id='textinomials'>
      <img src={Next_Icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={Back_Icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to purse my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Aurelia Marsh</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to purse my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>James lawrence</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to purse my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
