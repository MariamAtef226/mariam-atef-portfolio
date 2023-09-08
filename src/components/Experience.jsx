import exp from "../data/experiences.json";
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";

import "../style/all.min.css";
import "../scripts/all.min.js";

export default function Experience() {
  let [active, setActive] = useState(0);
  let [experiences, setExperiences] = useState(exp);
  let data = experiences.map((e, i) => <ExperienceCard {...e} key={i}/>);
  return (
    <div className="experience mt-5 pb-5 pb-md-1 " id="experience">
      <h1 className="text-center">Experience</h1>

    {/*largeScreens*/}
      <div className="mt-5 d-none d-md-flex exp-container row justify-content-center justify-content-md-evenly m-0 ">
        <button
          onClick={function () {
            setActive((prev) => {
              if (prev == 0) {
                return experiences.length - 1;
              } else return prev - 1;
            });
          }}
        >
          <i className="fa-solid fa-chevron-left pe-2"></i>
        </button>

        {active == experiences.length - 1
          ? [data[active], data[0], data[1]]
          : active == experiences.length - 2
          ? [data[active], data[active + 1], data[0]]
          : data.slice(active, active + 3)}

        <button 
          onClick={function () {
            setActive((prev) => {
              if (prev == experiences.length - 1) {
                return 0;
              } else return prev + 1;
            });
          }}
        >
          <i className="fa-solid fa-chevron-right ps-2"></i>
        </button>
      </div>

    {/*small screens*/}
      <div className="mt-5 d-md-none exp-container row d-flex justify-content-center justify-content-md-evenly m-0 ">
        <button
          onClick={function () {
            setActive((prev) => {
              if (prev == 0) {
                return experiences.length - 1;
              } else return prev - 1;
            });
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {data[active]}

        <button
          onClick={function () {
            setActive((prev) => {
              if (prev == experiences.length - 1) {
                return 0;
              } else return prev + 1;
            });
          }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>


    </div>
  );
}
