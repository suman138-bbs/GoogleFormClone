import React from 'react'
import Input from '../input/input.component'
const Mcq = () => {
  return (
    <div className='title-container'>
        <label>MCQ<span className='text-danger'>*</span></label>
        <div>
          <label>
            <Input type="radio" name="mcq" value="Option 1" className='radio-dot'/>
            Option 1
          </label>
        </div>
        <div>
          
          <label>
            <Input type="radio" name="mcq" value="Option 2" className='radio-dot'/>
            Option 2
          </label>
        </div>
        <div>
          <label>
            <Input type="radio" name="mcq" value="Option 3" className='radio-dot'/>
            Option 3
          </label>
        </div>
      </div>
  )
}

export default Mcq