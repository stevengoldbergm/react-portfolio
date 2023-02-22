import React from "react";

export default function Resume() {
  return (
    <div className="container p-2 d-flex flex-column justify-content-center align-items-center">
      {/* I should probably make this a table, but I'm tired and want this to be donneee */}
      <div className="container pt-4 d-flex flex-column justify-content-center align-items-center">
        {/* <h1 className='mb-4'>Skills!</h1> */}
        <ul className="list-group col-10 col-md-8">
          <li className="list-group-item d-flex flex-column">
            <h1 className="col-12 text-center mb-3">Tech</h1>
            <div className="d-flex flex-col flex-wrap col-12 justify-content-around">
              <img
                className="col-3 py-1 px-1"
                src="https://img.shields.io/badge/-HTML5-615EB6?logo=html5&logoColor=white&style=flat"
                alt="HTML5 badge"
              />

              <img
                className="col-3 py-1 px-1"
                src="https://img.shields.io/badge/-CSS3-615EB6?logo=CSS3&logoColor=white&style=flat"
                alt="CSS3 badge"
              />

              <img
                className="col-3 py-1 px-1"
                src="https://img.shields.io/badge/-JavaScript-615EB6?logo=JavaScript&logoColor=white&style=flat"
                alt="JavaScript badge"
              />

              <img
                className="col-3 py-1 px-1"
                src="https://img.shields.io/badge/-jQuery-615EB6?logo=jQuery&logoColor=white&style=flat"
                alt="jQuery badge"
              />
            </div>

            <div className="d-flex flex-col flex-wrap col-12 justify-content-around">
              <img
                className="col-3 py-1 px-1"
                src="https://img.shields.io/badge/-MySQL-615EB6?logo=MySQL&logoColor=white&style=flat"
                alt="MySQL badge"
              />

              <img
                className="col-3 py-1 px-1"
                src="https://img.shields.io/badge/-PostgreSQL-615EB6?logo=PostgreSQL&logoColor=white&style=flat"
                alt="PostgreSQL badge"
              />

              <img
                className="col-3 py-1 px-1"
                src="https://img.shields.io/badge/-GraphQL-615EB6?logo=GraphQL&logoColor=white&style=flat"
                alt="GraphQL badge"
              />

              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-Handlebars.js-615EB6?logo=Handlebars.js&logoColor=white&style=flat"
                alt="Handlebars.js badge"
              />
            </div>

            <div className="d-flex flex-col flex-wrap col-12 justify-content-around">
              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-MongoDB-615EB6?logo=MongoDB&logoColor=white&style=flat"
                alt="MongoDB badge"
              />

              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-Express-615EB6?logo=Express&logoColor=white&style=flat"
                alt="Express badge"
              />

              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-React-615EB6?logo=React&logoColor=white&style=flat"
                alt="React badge"
              />

              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-npm-615EB6?logo=npm&logoColor=white&style=flat"
                alt="npm badge"
              />
            </div>

            <div className="d-flex flex-col flex-wrap col-12 justify-content-around">
              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-Bootstrap-615EB6?logo=Bootstrap&logoColor=white&style=flat"
                alt="Bootstrap badge"
              />

              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-Bulma-615EB6?logo=Bulma&logoColor=white&style=flat"
                alt="Bulma badge"
              />

              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-SASS-615EB6?logo=SASS&logoColor=white&style=flat"
                alt="SASS badge"
              />

              <img
                className="col-3 py-1 px-1 "
                src="https://img.shields.io/badge/-heroku-615EB6?logo=heroku&logoColor=white&style=flat"
                alt="heroku badge"
              />
            </div>
          </li>
          <li className="list-group-item">
            <h1 className="col-12 text-center mb-3">Apps</h1>
            <div className="d-flex flex-col flex-wrap col-12 justify-content-around">
              <img
                className="col-4 py-1 px-1 "
                src="https://img.shields.io/badge/-VS Code-615EB6?logo=Visual Studio Code&logoColor=white&style=flat"
                alt="Visual Studio Code badge"
              />

              <img
                className="col-4 py-1 px-1 "
                src="https://img.shields.io/badge/-insomnia-615EB6?logo=insomnia&logoColor=white&style=flat"
                alt="insomnia badge"
              />

              <img
                className="col-4 py-1 px-1 "
                src="https://img.shields.io/badge/-MS Office-615EB6?logo=Microsoft Office&logoColor=white&style=flat"
                alt="Microsoft Office badge"
              />
            </div>

            <div className="d-flex flex-col flex-wrap col-12 align-items-center justify-content-around">
              <img
                className="col-3 py-1 px-1"
                src="https://img.shields.io/badge/-Git Bash-615EB6?logo=git&logoColor=white&style=flat"
                alt="Git Bash badge"
              />

              <img
                className="col-4 py-1 px-1 app-badge"
                src="https://img.shields.io/badge/-MySQL Workbench-615EB6?style=flat"
                alt="MySQL Workbench badge"
              />

              <img
                className="col-4 py-1 px-1 app-badge"
                src="https://img.shields.io/badge/-MongoDB Compass-615EB6?style=flat"
                alt="MongoDB Compass"
              />
            </div>
          </li>
          <li className="list-group-item text-center">And much, much more!</li>
        </ul>
      </div>

      <br />

      <a
        href={require("../../assets/StevenGoldbergResume_2023.pdf")}
        download="StevenGoldbergResume_2023.pdf"
        className="col-md-5 d-flex justify-content-center align-items-center"
      >
        <button
          className="btn btn-primary "
          // value="download"
          // download="myfile"
          href={require("../../assets/StevenGoldbergResume_2023.pdf")}
        >
          Download a copy of my resumé
        </button>
      </a>
    </div>
  );
}
