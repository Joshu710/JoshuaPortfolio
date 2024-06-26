import "./styles/Projects.css";
import { Card, Badge, Button } from "flowbite-react";
import dbot from "./../assets/projects/DiscordBot.png";
import pweb from "./../assets/projects/portWeb.png";
import webGame from "./../assets/projects/WebGame.png";
import css from "./../assets/skills/css.svg";
import django from "./../assets/skills/django.svg";
import flask from "./../assets/skills/flask.svg";
import html from "./../assets/skills/html.svg";
import js from "./../assets/skills/js.svg";
import python from "./../assets/skills/python.svg";
import react from "./../assets/skills/react.svg";
import mysql from "./../assets/skills/mysql.svg";
import docker from "./../assets/skills/docker.svg";
import nfl from "./../assets/projects/nfl.jpg";
import chest from "./../assets/projects/chest.jpeg";
import d2 from "./../assets/projects/d2.png";
import { useState } from "react";
export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const [showText, setShowText] = useState("Show all");

  const changeShowText = (showing) => {
    if (showing) {
      setShowText("Show less");
    } else {
      setShowText("Show all");
    }
  };

  return (
    <div className="w-10/12 h-9/12 mx-auto my-12">
      <h1 className=" text-heading font-extrabold text-4xl text-center">
        Projects
      </h1>

      <div className="flex max-w-full max-h-full flex-wrap my-12 justify-evenly">
        <Card
          rounded
          imgAlt="Project1"
          imgSrc={d2}
          className="!bg-card col mb-8 flex flex-col"
        >
          <h4 className="text-heading font-bold text-xl">
            Destiny 2 Weapon and Perk Stat Calculator
          </h4>
          <p className="text-sub">
            A full-stack application to calculate weapon stats based on selected
            perks in the online game Destiny 2.
          </p>
          <div className="flex justify-start flex-wrap">
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={python}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={js}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={react}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={django}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={mysql}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={docker}></img>
            </Card>
          </div>

          <Button
            className="!bg-pink8008 mt-auto"
            href="https://github.com/Joshu710/Destiny2WeaponCalculator"
            target="_blank"
          >
            View on Github
          </Button>
        </Card>
        <Card
          rounded
          imgAlt="Project1"
          imgSrc={chest}
          className="!bg-card col mb-8 flex flex-col"
        >
          <h4 className="text-heading font-bold text-xl">
            Image-Based Pneumonia Detection
          </h4>
          <p className="text-sub">
            Transfer-Learning model written in Pytorch used to identify lungs
            with and without Pneumonia.
          </p>
          <div className="flex justify-start">
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={python}></img>
            </Card>
          </div>

          <Button
            className="!bg-pink8008 mt-auto"
            href="https://github.com/Joshu710/PneumoniaDetection"
            target="_blank"
          >
            View on Github
          </Button>
        </Card>
        <Card
          rounded
          imgAlt="Project2"
          imgSrc={webGame}
          className="!bg-card col mb-8 flex flex-col"
        >
          <h4 className="text-heading font-bold text-xl">Web-Based Game</h4>
          <p className="text-sub">
            Created during my Spring 2023 Semester. Worked in a group of five to
            create web-game with users and highscores.
          </p>
          <div className="flex justify-start flex-wrap">
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={flask}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={python}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={js}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={html}></img>
            </Card>
            <Card className="w-20 h-20 p-0 m-1">
              <img className="" src={css}></img>
            </Card>
          </div>
          <Button
            className="!bg-pink8008 mt-auto"
            href="https://github.com/Joshu710/UMBC_CMSC447Proj"
            target="_blank"
          >
            View on Github
          </Button>
        </Card>
      </div>
      {showAll ? (
        <>
          <div className="flex max-w-full max-h-full flex-wrap my-12 justify-evenly">
            <Card
              rounded
              imgAlt="Project2"
              imgSrc={pweb}
              className="!bg-card col mb-8 flex flex-col"
            >
              <h4 className="text-heading font-bold text-xl">
                Portfolio Website
              </h4>
              <p className="text-sub">
                The Current website which displays my skills, experience, and
                projects.
              </p>

              <div className="flex justify-start flex-wrap">
                <Card className="w-20 h-20 p-0 m-1">
                  <img className="" src={react}></img>
                </Card>
                <Card className="w-20 h-20 p-0 m-1">
                  <img className="" src={html}></img>
                </Card>
                <Card className="w-20 h-20 p-0 m-1">
                  <img className="" src={css}></img>
                </Card>
                <Card className="w-20 h-20 p-0 m-1">
                  <img className="" src={js}></img>
                </Card>
              </div>
              <Button
                href="https://github.com/Joshu710/JoshuaPortfolio"
                className="!bg-pink8008 mt-auto"
                target="_blank"
              >
                View on Github
              </Button>
            </Card>
            <Card
              rounded
              imgAlt="Project1"
              imgSrc={dbot}
              className="!bg-card col mb-8 flex flex-col"
            >
              <h4 className="text-heading font-bold text-xl">
                Anime Search Discord Bot
              </h4>
              <p className="text-sub">
                A Chatbot that scrapes MyAnimelist.net allowing users to search
                for anime through Discord.
              </p>
              <div className="flex justify-start flex-wrap">
                <Card className="w-20 h-20 p-0 m-1">
                  <img className="" src={python}></img>
                </Card>
              </div>
              <Button
                className="!bg-pink8008 mt-auto"
                href="https://github.com/Joshu710/Anime-Bot"
                target="_blank"
              >
                View on Github
              </Button>
            </Card>

            <Card
              rounded
              imgAlt="Project1"
              imgSrc={nfl}
              className="!bg-card col mb-8 flex flex-col"
            >
              <h4 className="text-heading font-bold text-xl">
                NFL Passer Rating Calculator
              </h4>
              <p className="text-sub">
                GUI program written in Python library PyQt5 that takes in NFL
                stats that calculates passer rating.
              </p>
              <div className="flex justify-start flex-wrap">
                <Card className="w-20 h-20 p-0 m-1">
                  <img className="" src={python}></img>
                </Card>
              </div>
              <Button
                className="!bg-pink8008 mt-auto"
                href="https://github.com/Joshu710/QBR-Calc"
                target="_blank"
              >
                View on Github
              </Button>
            </Card>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="flex max-w-full max-h-full flex-wrap justify-evenly">
        <Button
          onClick={() => {
            let curr = !showAll;
            setShowAll(curr);
            changeShowText(curr);
          }}
        >
          {showText}
        </Button>
      </div>
    </div>
  );
}
