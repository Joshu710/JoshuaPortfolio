import css from "./../assets/skills/css.svg";
import django from "./../assets/skills/django.svg";
import flask from "./../assets/skills/flask.svg";
import html from "./../assets/skills/html.svg";
import js from "./../assets/skills/js.svg";
import python from "./../assets/skills/python.svg";
import react from "./../assets/skills/react.svg";
import cpp from "./../assets/skills/cplusplus.svg";
import "./styles/Skills.css";
export default function Skills() {
  return (
    <div className="w-10/12 h-9/12 mx-auto">
      <h1 className=" text-heading font-extrabold text-4xl underline">
        Skills
      </h1>
      <div className="my-12 max-w-full max-h-full flex">
        <div className="flex-auto">
          <img className="skill" src={python}></img>
        </div>
        <div className="flex-auto">
          <img className="skill" src={cpp}></img>
        </div>
        <div className="flex-auto">
          <img className="skill" src={html}></img>
        </div>
        <div className="flex-auto">
          <img className="skill" src={js}></img>
        </div>
        <div className="flex-auto">
          <img className="skill" src={css}></img>
        </div>
        <div className="flex-auto">
          <img className="skill" src={react}></img>
        </div>
        <div className="flex-auto">
          <img className="skill" src={django}></img>
        </div>
        <div className="flex-auto">
          <img className="skill" src={flask}></img>
        </div>
      </div>
    </div>
  );
}
