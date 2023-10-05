import { API } from '@/config';
import { useState } from 'react';

const UploadPage = () => {
    const [files, setFiles] = useState([]);
  
    const handleFileChange = (event) => {
      setFiles([...files, ...event.target.files]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      for (const file of files) {
        formData.append('images', file);
      }
  
      const response = await fetch(`${API}/images`, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log("Everything is fine");
      } else {
        alert('Something went wrong!');
      }
    };
  
    return (
      <div>
        <h1>Upload Images</h1>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <input type="file" multiple onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  };
  
  export default UploadPage;
