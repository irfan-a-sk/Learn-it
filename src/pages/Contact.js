<<<<<<< HEAD
const Contact =() => {
    return(
        <div>Contact page</div>
        
    )
}
<div>hi </div>

export default Contact
=======
import React from 'react'
import '../style/cont.css'
import contact from '../images/Contact.jpg'

const Contact =() => {
    return(
        <>
        <div className='Conmain'>
            <form> 
                <div className='form'>
                <h1 className='form-Head'>CONTACT US</h1><br/>
                <div className='form-content'>
                <input type="text" placeholder='Enter Your Name'></input><br/>
                <input type="Email" placeholder='Enter Your Email'></input><br/>
                <textarea type="text" placeholder='Enter Your Messege'></textarea>
                </div><br/>
                <button type="submit">SUBMIT</button>
                </div>
            </form>
          
    
           <img className='contgirl' src={contact} alt='contact-img'/>
           
        <div className='contact-us'>
        <div class="contact-info">
            <div class="contact-section">
                <i class="phone-icon">&#9742;</i>
                <h2>CALL US</h2>
                <p>1 (234) 567-891, 1 (234) 987-654</p>
            </div>
            <div class="contact-section">
                <i class="location-icon">&#128202;</i>
                <h2>LOCATION</h2>
                <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
            </div>
            <div class="contact-section">
                <i class="clock-icon">&#128336;</i>
                <h2>BUSINESS HOURS</h2>
                <p>Mon - Fri ...... 10 am - 8 pm, Sat, Sun ...... Closed</p>
            </div>
        </div>
        </div>
        </div>
    
        </>
    )
}

export default Contact
>>>>>>> 8f77fbefe98f355e827d8627e429571ac04fb978
