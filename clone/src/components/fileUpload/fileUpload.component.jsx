import {useState} from 'react'

import './fileUpload.style.css'
const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="form-containerf">
      {/* File Upload */}
      <div className="title-container">
        <label>File Upload<span className='text-danger'>*</span></label>
        <div className="file-upload-container">
          <label className="file-label">
            <span className="file-label-text">
              {selectedFile ? selectedFile.name : 'Choose a file'}
            </span>
            <input
              type="file"
              className="file-input"
              onChange={handleFileChange}
              accept=".pdf, .doc, .docx"
            />
            {/* <span className="file-label-btn">Browse</span> */}
          </label>
        </div>
      </div>
    </div>
  )
}

export default FileUpload