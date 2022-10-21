import React from 'react';

export default function Resume() {
  return (
    <div className='container p-2 d-flex flex-column justify-content-center align-items-center'>
      {/* I should probably make this a table, but I'm tired and want this to be donneee */}
      <div className='container '>
        <h1>Skills!</h1>
        <ul className='list-group'>
          <li className='list-group-item'>
            Basics | HTML, CSS, Javascript
          </li>
          <li className='list-group-item'>
            CSS frameworks | Bootstrap, Bulma
          </li>
          <li className='list-group-item'>
            More JS | JQuery, Node, Express
          </li>
          <li className='list-group-item'>
            Databases | PostgreSQL, mySQL
          </li>
          <li className='list-group-item'>
            noSQL | MongoDB, Mongoose
          </li>
          <li className='list-group-item'>
            React, MERN, PWA
          </li>
          <li className='list-group-item'>
            And much, much more!
          </li>
        </ul>
        <ul>
          
        </ul>
      </div>

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
