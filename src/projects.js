const projects = [
    {
        img: require("./assets/imgs/MovieMate.png"),
        title: "MovieMate 2.0",
        text: "Search movies, get details. <br></br><br></br> MovieMate utilizes the OMDb and Youtube APIs to provide users with movie information and relevant movie trailers. It also supports user accounts and user reviews using mySQL.",
        tech: "Bulma | mySQL | RESTful API | 3rd Party APIs | Axios | Node.js | Express.js | Handlebars.js",
        liveApp: "https://movie-mate-2.herokuapp.com/",
        gitRepo: "https://github.com/stevengoldbergm/movie-mate-2.0",
        id: 1
    },
    {
        img: require("./assets/imgs/JATE.png"),
        title: "Text Editor (J.A.T.E)",
        text: "Write notes, install, and work offline! <br></br><br></br> J.A.T.E may be just another text editor, but this PWA utilizes service-workers, manifests, and Idb to present a seamless text-editor experience. It can run locally, or from its heroku site.",
        tech: "Codemirror | Mongoose | PWA | Service-workers | Idb | Express.js",
        liveApp: "https://text-editor-stevengoldbergm.herokuapp.com/",
        gitRepo: "https://github.com/stevengoldbergm/text-editor",
        id: 2
    },
    {
        img: require("./assets/imgs/techBlog.png"),
        title: "Tech Blog!",
        text: "Sign up! Add Thoughts! <br></br><br></br> This tech blog allows users to make an account, post articles to a shared message board, and make comments on each post. You can also edit and delete your posts from the dashboard!",
        tech: "Bootstrap | ???",
        liveApp: "https://tech-blog-stevengoldbergm.herokuapp.com/",
        gitRepo: "https://github.com/stevengoldbergm/tech-blog",
        id: 3
    },
    {
        img: require("./assets/imgs/noteTaker.png"),
        title: "Note Taker",
        text: "Make and delete notes with ease! <br></br><br></br> Note Taker is a checklist app. Add notes by entering a note title and text, then delete the note by clicking the trash-can when you're finished!",
        tech: "??? | ???",
        liveApp: "https://note-taker-sgm86.herokuapp.com/notes",
        gitRepo: "https://github.com/stevengoldbergm/Note-Taker",
        id: 4
    },
    {
        img: require("./assets/imgs/Weather.png"),
        title: "US Weather Dashboard",
        text: "Check US weather by city or zip code. <br></br><br></br> The US Weather Dashboard utilizes the openweathermap API to check weather conditions across the country. Enter your desired city and state, or just a simple zip-code to get started.",
        tech: "Bulma | OpenWeather API | Fetch Api",
        liveApp: "https://stevengoldbergm.github.io/weather-dashboard/",
        gitRepo: "https://github.com/stevengoldbergm/weather-dashboard",
        id: 5
    },
    {
        img: require("./assets/imgs/scheduler.png"),
        title: "Workday Scheduler",
        text: "Make your schedule. Stay on track!<br></br><br></br>The Workday Scheduler utilizes local storage to handle saving tasks, and the JavaScript setInterval() method to dynamically color-code page elements. The current, upcoming, and past time blocks are easily identified at a glance!",
        tech: "Local Storage | JS setInterval",
        liveApp: "https://stevengoldbergm.github.io/daily-planner/",
        gitRepo: "https://github.com/stevengoldbergm/daily-planner",
        id: 6
    },
];
export default projects;