import React from 'react'
import './title.style.css'
const Title = () => {
  return (
    <div className="container mt-5 title-container">
       <div className='title-container-sm'></div>   
      <h2>Assignment Task</h2>
      <hr />
      <p><b>sumanbhandari9860@gmail.com</b> <a href="" target="_blank" rel="noopener noreferrer">Switch account</a></p>
      <p>
        Draft saved. The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.
      </p>
      <hr/>
      <p className='text-danger'>
        <span className="required">*</span> Indicates required question
      </p>

      
    </div>
  )
}

export default Title