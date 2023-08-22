import { useState } from "react";
import './LinearScale.style.css'
const LinearScale = () => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
      <div className="title-container">
      <p>Short Answer<span className='text-danger'>*</span></p><br /> 
      
        <div className="linear-scale-labels">
              
        <div>Worst</div>
        
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="scale-number">
                  <label className={`scale-label ${rating === value ? 'active' : ''}`}>
                     <span className="custom-radio">{ value}</span>
                    <input
                      type="radio"
                      name="linear-scale"
                      value={value}
                      checked={rating === value}
                      onChange={() => handleRatingChange(value)}
                      className="radio-dot "
                    />
                   
                    
                  </label>
                </div>
              ))}
              <div>Best</div>
      </div>
    </div>
  );
};

export default LinearScale;