import React from 'react';

export default function Resume() {
  return (
    <div className='container p-2 d-flex flex-column justify-content-center align-items-center'>
      {/* I should probably make this a table, but I'm tired and want this to be donneee */}
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <h1 className='mb-4'>Skills!</h1>
        <ul className='list-group col-10 col-md-8'>
          <li className='list-group-item'>
            <strong>Technical Languages</strong> | HTML, CSS, Javascript, jQuery, Handlebars.js, MySQL 2, PostgreSQL, MongoDB, Express, React, Node.js, PWA, Bootstrap, Bulma, SASS, VBA
          </li>
          <li className='list-group-item'>
            <strong>Applications</strong> | Git Bash, Visual Studio Code, MySQL Workbench, MongoDBCompass, Insomnia, MS Office Suite
          </li>
          <li className='list-group-item'>
            And much, much more!
          </li>
        </ul>
        <ul>
          
        </ul>
      </div>

      <a href={require("../../assets/StevenGoldbergResume_2022.pdf")} download="StevenGoldbergResume_2022.pdf" className="col-md-5 d-flex justify-content-center align-items-center">
      <button 
        className="btn btn-primary " 
        // value="download" 
        // download="myfile" 
        href={require("../../assets/StevenGoldbergResume_2022.pdf")}>
          Download a copy of my current resumé
      </button>
      </a>


    </div>
  );
}
