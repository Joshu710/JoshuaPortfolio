import css from "./../assets/skills/css.svg";
import django from "./../assets/skills/django.svg";
import flask from "./../assets/skills/flask.svg";
import html from "./../assets/skills/html.svg";
import js from "./../assets/skills/js.svg";
import python from "./../assets/skills/python.svg";
import react from "./../assets/skills/react.svg";
import "./styles/Skills.css";
export default function Skills() {
  return (
    <div className="w-10/12 h-9/12 mx-auto">
      <h1 className=" text-white font-extrabold text-4xl underline">Skills</h1>
      <div className="my-8 flex w-20 h-20 gap-3">
        <img className="skill" src={python}></img>
        <img className="skill" src={html}></img>
        <img className="skill" src={js}></img>
        <img className="skill" src={css}></img>
        <img className="skill" src={react}></img>
        <img className="skill" src={django}></img>
        <img className="skill" src={flask}></img>
      </div>
    </div>
  );
}
