import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'


function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3734870b-b455-447d-82d9-fb34d411e590");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />
            Contact@edusity.dev
            </li>
            <li> <img src={phone_icon} alt="" />+1123-456-7890</li>
            <li> <img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States</li>
                </ul>
      </div>
      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" placeholder='Enter your Name' required/>
            <label>Phone Number</label>
            <input type="tel" placeholder='Enter your Mobile Number' required />
            <label>Your Email</label>
            <input type="text" placeholder='Enter your Email id' />
            <label>Write your message here</label>
            <textarea name="message" rows= '6' placeholder='Enter your Message'></textarea>

            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
