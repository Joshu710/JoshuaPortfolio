import { Timeline, Button } from "flowbite-react";

("use client");
export default function Exp() {
  return (
    <div className="w-10/12 h-9/12 mx-auto my-12">
      <h1 className=" text-heading font-extrabold text-4xl text-center">
        Experience
      </h1>
      <div className="flex justify-center my-12">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>February 2022 - May 2023</Timeline.Time>
              <Timeline.Title>
                Teaching Fellowship - University of Maryland, Baltimore County
              </Timeline.Title>
              <Timeline.Body>
                Aided undergraduate students in understanding concepts of
                object-oriented programming and data Structures in C++.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}
