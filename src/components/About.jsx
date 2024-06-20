import "./styles/About.css";
import linkedin from "./../assets/socials/linkedin48.png";
import github from "./../assets/socials/github.png";
import email from "./../assets/socials/email.png";
export default function About() {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <h1 className="typing text-heading name text-center font-bold pb-5">
          Joshua Bernal
        </h1>
      </div>
      <h1 className="text-center desc text-heading">
        Aspiring Software Developer
      </h1>
      <h2 className="text-center bio text-heading m-5 max-w-prose">
        I am a recent graduate of the University of Maryland, Baltimore County
        with a Bachelors degree in Computer Science with a minor in Mathematics.
        I will be graduating in May 2024. I have experience in web development,
        artifical intelligence, and machine learning. Seeking full-time Software
        Engineering position.
      </h2>
      <div className="flex justify-center pt-4">
        <a
          className="socials"
          href="https://www.linkedin.com/in/joshua-bernal710/"
          target="_blank"
        >
          <img src={linkedin}></img>
        </a>
        <a
          href="https://github.com/Joshu710"
          target="_blank"
          className="socials"
        >
          <img src={github}></img>
        </a>
        <a
          className="scale-75 socials"
          href="mailto:joshuabernal710@gmail.com"
          target="_blank"
        >
          <img src={email}></img>
        </a>
      </div>
    </div>
  );
}
