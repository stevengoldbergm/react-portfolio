import React from 'react';
import avatar from '../../assets/imgs/Headshot_Basic.jpg';

export default function About() {
  return (
    <div className="container d-flex flex-column flex-md-row col-12 col-md-10 col-lg-8 p-3 justify-content-between align-items-center ">
      <img src={avatar} className="d-md-none rounded-circle shadow bg-dark img-thumbnail col-4" width="25%" height="auto" style={{ maxWidth: "200px" }} alt="Current Headshot" />

      <img src={avatar} className="d-none d-md-block shadow bg-dark img-thumbnail col-4" width="25%" height="auto" style={{ maxWidth: "25vw" }} alt="Current Headshot" />
      
      <article className="col-md-7 mt-1 p-4 rounded d-flex flex-column">
        {/* <h5 className=''>
          About Me! 
        </h5> */}
        <br/>
        Hi, I'm Steve, and I am a certified full-stack web-developer. 
        <br/>
        <br/>
        I have a varied professional background, a bachelor's degree in psychology, and nearly a decade's worth of experience leading teams and projects in imaging operations for financial institutions. I'm passionate about continuing to learn and improve myself, and I love helping others. When I'm not working, I like to read fantasy novels and run TTRPGs for my friends.
        <br></br>
        <br></br> 
        Please take a look at my work, and feel free to contact me if you're looking for a developer with great communication skills, a growth mindset, and a strong work ethic!
        <br/>
        <br/>

        <div className='mt-3 col-10 align-self-center d-flex justify-content-center'>
          <button class="btn btn-primary" href="/react-portfolio/static/media/StevenGoldbergResume_2023.7f5db7356c026c073ef4.pdf">
          Check out my resumé
        </button>
        </div>
        

      </article>


    </div>
  );
}
