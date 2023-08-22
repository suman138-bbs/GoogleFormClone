import React from 'react'
import { useState } from 'react'
const MultiChoiceGrid = () => {
    const [row,setRow] = useState([1,2,3])
  return (
    <div className='title-container'>
        <label>Multi-choice Grid<span className='text-danger'>*</span></label>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
                  {
                      row.map((val) => {
                          return <tr>
              <td>Row {val} </td>
              <td><input type="radio" name="grid-row-1" value="Column 1"  className='radio-dot'/></td>
              <td><input type="radio" name="grid-row-1" value="Column 2" className='radio-dot' /></td>
              <td><input type="radio" name="grid-row-1" value="Column 3" className='radio-dot' /></td>
            </tr>
                      })
                      
            }
            
          </tbody>
        </table>
      </div>
  )
}

export default MultiChoiceGrid