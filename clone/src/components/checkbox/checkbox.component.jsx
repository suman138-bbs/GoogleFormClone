import React from 'react'
import Input from '../input/input.component'

const CheckBox = () => {
    return (
      <div className='title-container'>
        <label>Checkbox<span className='text-danger'>*</span></label>
        <div>
          <label>
            <Input type="checkbox" name="checkbox" value="Option 1" className='check-box' />
            Option 1
          </label>
        </div>
        <div>
          <label>
            <Input type="checkbox" name="checkbox" value="Option 2" className='check-box'/>
            Option 2
          </label>
        </div>
        <div>
          <label>
            <Input type="checkbox" name="checkbox" value="Option 3" className='check-box' />
            Option 3
          </label>
        </div>
      </div>

  )
}

export default CheckBox