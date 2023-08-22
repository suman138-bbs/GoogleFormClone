import { useState } from 'react';
import './dropDown.style.css'
const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="form-container">
      {/* Dropdown */}
      <div className="title-container">
        <label>Dropdown<span className='text-danger'>*</span></label>
        <div className="select-container">
          <select
            className="form-select"
            name="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          {selectedOption && <span className="floating-label">{selectedOption}</span>}
        </div>
      </div>
    </div>
  );
}
export default DropDown