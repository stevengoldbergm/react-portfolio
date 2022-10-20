import React from 'react';

export default function Portfolio() {
  return (
      <main className="container d-flex flex-wrap flex-column flex-md-row justify-content-center justify-content-sm-around align-items-center">

        <div className="card col-10 col-md-5 mt-4 mx-1" >
          <img className="card-img-top border" src={require("../../Assets/imgs/MovieMate.png")} alt="App Screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">MovieMate 2.0</h5>
            <p className="card-text">Search movies, get details. <br></br><br></br> MovieMate utilizes the OMDb and Youtube APIs to provide users with movie information and relevant movie trailers. It also supports user accounts and user reviews using mySQL.</p>
            <p className="card-text small text-muted text-center">Bulma | mySQL | RESTful API | 3rd Party APIs | Axios | Node.js | Express.js | Handlebars.js</p>
            <div className="container d-flex justify-content-around">
              <a href="https://movie-mate-2.herokuapp.com/" className="btn btn-primary col-5">Live Site</a>
              <a href="https://github.com/stevengoldbergm/movie-mate-2.0" className="btn btn-secondary col-5">Github</a>
            </div>
          </div>
        </div>

        <div className="card col-10 col-md-5 mt-4 mx-1" >
          <img className="card-img-top border" src={require("../../Assets/imgs/JATE.png")} alt="App Screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Text Editor (J.A.T.E)</h5>
            <p className="card-text">Write notes, install, and work offline! <br></br><br></br> J.A.T.E may be just another text editor, but this PWA utilizes service-workers, manifests, and Idb to present a seamless text-editor experience. It can run locally, or from its heroku site.</p>
            <p className="card-text small text-muted text-center">Codemirror | Mongoose | PWA | Service-workers | Idb | Express.js</p>
            <div className="container d-flex justify-content-around">
              <a href="https://text-editor-stevengoldbergm.herokuapp.com/" className="btn btn-primary col-5">Live Site</a>
              <a href="https://github.com/stevengoldbergm/text-editor" className="btn btn-secondary col-5">Github</a>
            </div>
          </div>
        </div>

        <div className="card col-10 col-md-5 mt-4 mx-1" >
          <img className="card-img-top border" src={require("../../Assets/imgs/techBlog.png")} alt="App Screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Tech Blog!</h5>
            <p className="card-text">Sign up! Add Thoughts! <br></br><br></br> This tech blog allows users to make an account, post articles to a shared message board, and make comments on each post. You can also edit and delete your posts from the dashboard! </p>
            <p className="card-text small text-muted">Technologies: <br></br>Bootstrap | ??? |</p>
            <div className="container d-flex justify-content-around">
              <a href="https://tech-blog-stevengoldbergm.herokuapp.com/" className="btn btn-primary col-5">Live Site</a>
              <a href="https://github.com/stevengoldbergm/tech-blog" className="btn btn-secondary col-5">Github</a>
            </div>
          </div>
        </div>

        <div className="card col-10 col-md-5 mt-4 mx-1" >
          <img className="card-img-top border" src={require("../../Assets/imgs/noteTaker.png")} alt="App Screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Note Taker</h5>
            <p className="card-text">Make and delete notes with ease! <br></br><br></br> Note Taker is a checklist app. Add notes by entering a note title and text, then delete the note by clicking the trash-can when you're finished!</p>
            <p className="card-text small text-muted">Technologies: <br></br>??? | ??? | </p>
            <div className="container d-flex justify-content-around">
              <a href="https://note-taker-sgm86.herokuapp.com/notes" className="btn btn-primary col-5">Live Site</a>
              <a href="https://github.com/stevengoldbergm/Note-Taker" className="btn btn-secondary col-5">Github</a>
            </div>
          </div>
        </div>

        <div className="card col-10 col-md-5 mt-4 mx-1" >
          <img className="card-img-top border" src={require("../../Assets/imgs/Weather.png")} alt="App Screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">US Weather Dashboard</h5>
            <p className="card-text">Check US weather by city or zip code. <br></br><br></br> The US Weather Dashboard utilizes the openweathermap API to check weather conditions across the country. Enter your desired city and state, or just a simple zip-code to get started.</p>
            <p className="card-text small text-muted text-center">Bulma | OpenWeather API | Fetch Api </p>
            <div className="container d-flex justify-content-around">
              <a href="https://stevengoldbergm.github.io/weather-dashboard/" className="btn btn-primary col-5">Live Site</a>
              <a href="https://github.com/stevengoldbergm/weather-dashboard" className="btn btn-secondary col-5">Github</a>
            </div>
          </div>
        </div>

        <div className="card col-10 col-md-5 mt-4 mx-1" >
          <img className="card-img-top border" src={require("../../Assets/imgs/scheduler.png")} alt="App Screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Workday Scheduler</h5>
            <p className="card-text">The Workday Scheduler utilizes local storage to handle saving tasks, and the JavaScript setInterval() method to dynamically color-code page elements. The current, upcoming, and past time blocks are easily identified at a glance!</p>
            <p className="card-text small text-muted text-center"> Local Storage | JS setInterval </p>
            <div className="container d-flex justify-content-around">
              <a href="https://stevengoldbergm.github.io/daily-planner/" className="btn btn-primary col-5">Live Site</a>
              <a href="https://github.com/stevengoldbergm/daily-planner" className="btn btn-secondary col-5">Github</a>
            </div>

          </div>
        </div>

      </main>

  );
}
