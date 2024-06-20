import css from "./../assets/skills/css.svg";
import django from "./../assets/skills/django.svg";
import flask from "./../assets/skills/flask.svg";
import html from "./../assets/skills/html.svg";
import js from "./../assets/skills/js.svg";
import python from "./../assets/skills/python.svg";
import react from "./../assets/skills/react.svg";
import cpp from "./../assets/skills/cplusplus.svg";
import mysql from "./../assets/skills/mysql.svg";
import docker from "./../assets/skills/docker.svg";
import "./styles/Skills.css";
import { Card } from "flowbite-react";
export default function Skills() {
  return (
    <div className="w-10/12 h-9/12 mx-auto">
      <h1 className=" text-heading text-center font-extrabold text-4xl">
        Skills
      </h1>
      <div className="flex my-12  justify-center space-x-2 space-y-2 flex-wrap">
        <Card className="flex-none m-2 !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={python}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={cpp}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={html}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={js}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={css}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={react}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={django}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={flask}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={mysql}></img>
        </Card>
        <Card className="flex-none !bg-card h-36 w-36 brightness-100 hover:brightness-200">
          <img src={docker}></img>
        </Card>
      </div>
    </div>
  );
}
