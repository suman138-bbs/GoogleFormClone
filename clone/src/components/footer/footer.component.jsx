import React from 'react'
import './footer.style.css'
const Footer = () => {
  return (
      <>
        <div className='footer-container'>
              <div>
                  <button className='submit-btn'>Submit</button>
              </div>
              <div>
                  <p>Clear form</p> 
              </div>
          </div>
          <div className='para'>
             <p>Never submit passwords through Google Forms.</p> 
            <p>This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</p>
            <p> Google Forms</p>
          </div>
       
      </>  
  )
}

export default Footer