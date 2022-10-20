import React from 'react';

export default function About() {
  return (
    <div className="container d-flex flex-column flex-sm-row col-12 col-sm-10 p-3 justify-content-between align-items-center align-items-sm-start">
      <img src={require("../../Assets/imgs/Bauldren.png")} className="rounded-circle bg-dark img-thumbnail col-4" width="25%" height="auto" style={{ maxWidth: "200px" }} alt="Pixel Avatar"></img>
      <p className="col-sm-7 pt-1">
        Hi there! 
        <br></br>
        <br></br> 
        My name is Steve, and I am a (soon to be) certified full-stack developer. 
        <br></br>
        <br></br> 
        I have a varied background, a bachelor's degree in psychology, and nearly a decade's worth of experience leading teams and projects in imaging operations for financial institutions. My passion however, lies in working with technology and coding. 
        <br></br>
        <br></br> 
        Please take a look at my work, and feel free to contact me if you're looking for a developer with good communication skills, a growth mindset, and a strong work ethic!
      </p>
    </div>
  );
}
