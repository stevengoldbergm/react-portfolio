import avatar from "../../assets/imgs/Headshot_Basic-4.png";

export default function About() {
  return (
    <>
      <div className="container d-flex flex-column flex-lg-row col-12 col-md-10 col-lg-8 p-3 justify-content-around align-items-center mt-3">
        <img
          src={avatar}
          className="d-md-none rounded-circle shadow bg-dark img-thumbnail col-4"
          alt="Current Headshot"
        />

        <img
          src={avatar}
          className="d-none d-md-block shadow bg-dark img-thumbnail col-4"
          alt="Current Headshot"
        />

        <article className=" p-4 rounded d-flex flex-column">
          Hi, I'm Steve, and I am a certified full-stack web-developer.
          <br />
          <br />
          I also have a bachelor's degree in psychology and nearly a decade's worth of experience leading teams and projects in imaging operations for financial institutions. I'm passionate about continuing to learn and improve myself, and I love helping others. When I'm not working, I like to read fantasy novels and run TTRPGs for my friends.
          <br />
          <br />
          Please take a look at my work, and feel free to contact me if you're
          looking for a developer with great communication skills, a growth
          mindset, and a strong work ethic!
        </article>
      </div>
      <div className="mt-3 col-10 align-self-center d-flex justify-content-center">
        <a
          href={require("../../assets/StevenGoldbergResume_2023.pdf")}
          download="StevenGoldbergResume_2023.pdf"
          className="col-md-8 d-flex justify-content-center align-items-center"
        >
          <button
            class="btn btn-primary"
            href={require("../../assets/StevenGoldbergResume_2023.pdf")}
          >
            Check out my resumé
          </button>
        </a>
      </div>
    </>
  );
}
