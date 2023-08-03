import "./styles/About.css";
import linkedin from "./../assets/linkedin48.png";
import github from "./../assets/github.png";
import email from "./../assets/email.png";
export default function About() {
  return (
    <div className="justify-center items-center">
      <h1 className=" text-mtblue text-7xl text-center font-bold pb-5">
        Joshua Bernal
      </h1>
      <h1 className="text-center text-3xl text-mtblue ">
        Student at University of Maryland, Baltimore County
      </h1>

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
