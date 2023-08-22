import React from 'react'
import './paragraph.style.css'
const Paragrph = () => {
  return (
    <div className='title-container'>
        <label>Short Answer<span className='text-danger'>*</span></label><br/>
       <div className="underline-inputp">
        <input type="text" name="underline-text" className="underlinep" />
      </div>

    </div>
  )
}

export default Paragrph