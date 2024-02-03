import { Card } from "flowbite-react";
import umbc from "./../assets/education/umbc.svg";
import "./styles/Edu.css";
export default function Education() {
  return (
    <div>
      <h1 className=" text-heading font-extrabold text-4xl text-center">
        Education
      </h1>
      <div className="flex my-12 justify-center space-x-2 space-y-2 flex-wrap">
        <Card className="!bg-card umbc">
          <img src={umbc}></img>
          <h1 className="text-heading text-center">
            August 2020 - May 2024:<br></br>University of Maryland, Baltimore
            County
          </h1>
          <h2 className="text-heading text-center">Major: Computer Science</h2>
          <h2 className="text-heading text-center">Minor: Mathematics</h2>
        </Card>
      </div>
    </div>
  );
}
