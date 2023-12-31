import "./styles/Projects.css";
import { Card, Badge, Button } from "flowbite-react";
import yots from "./../assets/Capture.png";
import dbot from "./../assets/projects/DiscordBot.png";
import pweb from "./../assets/projects/portWeb.png";
import webGame from "./../assets/projects/WebGame.png";

export default function Projects() {
  return (
    <div className="w-10/12 h-9/12 mx-auto my-12">
      <h1 className=" text-heading font-extrabold text-4xl underline">
        Projects
      </h1>

      <div className="flex max-w-full max-h-full">
        <div className="col">
          <Card
            rounded
            imgAlt="Project2"
            imgSrc={webGame}
            className="!bg-card !object-cover"
          >
            <h4 className="text-heading font-bold text-xl">Web-Based Game</h4>
            <p className="text-sub">
              Created during my Spring 2023 Semester. Worked in a group of five
              to create web-game with users and highscores.
            </p>
            <div className="flex">
              <div className="langs">
                <Badge size="sm" color="info">
                  React
                </Badge>
              </div>
              <div className="langs">
                <Badge size="sm" color="info">
                  HTML
                </Badge>
              </div>
              <div className="langs">
                <Badge size="sm" color="info">
                  CSS
                </Badge>
              </div>
              <div className="langs">
                <Badge size="sm" color="info">
                  JavaScript
                </Badge>
              </div>
            </div>

            <Button className="!bg-pink8008">View on Github</Button>
          </Card>
        </div>
        <div className="col">
          <Card
            rounded
            imgAlt="Project2"
            imgSrc={pweb}
            className="!bg-card !object-cover"
          >
            <h4 className="text-heading font-bold text-xl">
              Portfolio Website
            </h4>
            <p className="text-sub">
              The Current website which displays my skills, experience, and
              projects.
            </p>
            <div className="flex">
              <div className="langs">
                <Badge size="sm" color="info">
                  React
                </Badge>
              </div>
              <div className="langs">
                <Badge size="sm" color="info">
                  HTML
                </Badge>
              </div>
              <div className="langs">
                <Badge size="sm" color="info">
                  CSS
                </Badge>
              </div>
              <div className="langs">
                <Badge size="sm" color="info">
                  JavaScript
                </Badge>
              </div>
            </div>

            <Button
              href="https://github.com/Joshu710/JoshuaPortfolio"
              className="!bg-pink8008"
              target="_blank"
            >
              View on Github
            </Button>
          </Card>
        </div>
        <div className="col">
          <Card
            rounded
            imgAlt="Project1"
            imgSrc={dbot}
            className="!bg-card !object-cover"
          >
            <h4 className="text-heading font-bold text-xl">
              Anime Search Discord Bot
            </h4>
            <p className="text-sub">
              A Chatbot that scrapes MyAnimelist.net allowing users to search
              for anime through Discord.
            </p>
            <Badge size="sm" color="info">
              Python
            </Badge>
            <Button className="!bg-pink8008">View on Github</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
