import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useRef } from 'react';
import "./upload.css"
function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleFileUpload = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', selectedFile);
  
    try{
      const response = await  fetch('https://talkingdocs.onrender.com/upload', {
        method: 'POST',
        body: formData,
      })
  
      const data = await response.json();
      
      console.log(data)
      navigate("/chat")
  
  
    }catch(e){
        console.log(e)
    }
  
  };



  return (
    <div className="file-upload-container">

      
   {  !selectedFile &&  <div>
        <input type="file" onChange={handleFileChange} name="avatar" style={{ display: 'none' }} />
        <button onClick={() => document.querySelector('input[type="file"]').click()}>Select Your PDF </button>
      </div>}
       {
          selectedFile && ( 
              <div>
                <p>{selectedFile.name}</p>
                <button onClick={handleFileUpload}>Upload this file</button>
              </div> 
        )}
    </div>
  );
}

export default Upload;
