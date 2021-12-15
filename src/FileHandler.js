import React, { useState } from "react";
import Resampler from "./AudioConverter";
import axios from "axios";

export default function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", selectedFile);
    Resampler(data.get("file"));
  };
  return (
    <div>
      <input accept=".wav" type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
