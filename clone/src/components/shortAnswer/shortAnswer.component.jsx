import React from 'react'
import Input from '../input/input.component'
import './shortAnswer.style.css'
const ShortAnswer = () => {
  return (
     <div className='title-container'>
        <label>Short Answer<span className='text-danger'>*</span></label><br/>
       <div className="underline-input">
        <input type="text" name="underline-text" className="underline" />
      </div>

      </div>
  )
}

export default ShortAnswer