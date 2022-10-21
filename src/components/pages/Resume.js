import React from 'react';

// const downloadResume = () => {
//   console.log('Write some code')

//   const resume = require('../../assets/rezoom.txt')

//   const file = new Blob(resume)

//   const a = document.createElement("a")
//   a.href = URL.createObjectURL(file)
//   a.download = "rezoom.txt"
//   a.click()
// }

export default function Resume() {
  return (
    <div className='container p-5 d-flex flex-column justify-content-center align-items-center'>
      <a href={require("../../assets/rezoom.txt")} download="rezoom.txt" className="col-md-5 d-flex justify-content-center align-items-center">
      <button 
        className="btn btn-primary " 
        // value="download" 
        // download="myfile" 
        href={require("../../assets/rezoom.txt")}>
          Download a copy of my current resumé
      </button>
      </a>


    </div>
  );
}
