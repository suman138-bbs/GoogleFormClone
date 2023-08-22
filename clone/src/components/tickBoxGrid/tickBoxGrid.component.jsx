import {useState} from 'react'
const TickBoxGrid = () => {
  const [value,setValue] = useState([1,2,3])
  return (
     <div className='title-container'>
        <label>Tick Box Grid<span className='text-danger'>*</span></label>
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
          {value.map((val) => {
              return <tr>
                <td>Row {val }</td>
              <td><input type="checkbox" name="grid-row-1-column-1" className='check-box'/></td>
              <td><input type="checkbox" name="grid-row-1-column-2" className='check-box' /></td>
              <td><input type="checkbox" name="grid-row-1-column-3" className='check-box'/></td>
            </tr>
            })}
            
          </tbody>
        </table>
      </div>
  )
}

export default TickBoxGrid