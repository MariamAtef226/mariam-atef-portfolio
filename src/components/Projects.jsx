import { useState } from "react";
import Project from "./Project";
import projects from "../data/projects.json"





import img1 from '../assets/projects/van-life.gif'
import img2 from '../assets/projects/house-wallet.gif'
import img3 from '../assets/projects/chic-chick.gif'
import img4 from '../assets/projects/bitnine-clone.gif'
import img5 from '../assets/projects/markdown-previewer.gif'
import img6 from '../assets/projects/background-generator.gif'
import img7 from '../assets/projects/temperature-converter.gif'
import img8 from '../assets/projects/tenzies.gif'
import img9 from '../assets/projects/drum-machine.gif'
import img10 from '../assets/projects/react-calculator.gif'
import img11 from '../assets/projects/quotes-generator.gif'

let images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11];



export default function Projects() {


  function initClasses() {
    let a = new Array(projects.length);
    a[0] = "semi-active-before";
    a[1] = "active-project";
    a[2] = "semi-active-after";
    for (let i = 3; i < a.length; i++) {
      a[i] = "done-after";
    }
    return a;
  }

  /* display logic*/
  let [current, setCurrent] = useState(1);
  let [classes, setClasses] = useState(initClasses());

  function arrowUp() {
    var i1, i2, i3, i4;
    if (current == 1) {
      i1 = 2;
      i2 = 1;
      i3 = 0;
      i4 = projects.length - 1;
    } else if (current == 0) {
      i1 = 1;
      i2 = 0;
      i3 = projects.length - 1;
      i4 = projects.length - 2;
    } else if (current == projects.length - 1) {
      i1 = 0;
      i2 = projects.length - 1;
      i3 = projects.length - 2;
      i4 = projects.length - 3;
    } else {
      i1 = current + 1;
      i2 = current;
      i3 = current - 1;
      i4 = current - 2;
    }
    setCurrent(i3);
    setClasses((prev) => {
      let temp = [...prev];
      temp[i1] = "done-after";
      temp[i2] = "semi-active-after";
      temp[i3] = "active-project";
      temp[i4] = "semi-active-before";
      return temp;
    });
  }

  function arrowDown() {
    var i1, i2, i3, i4;
    if (current == projects.length - 2) {
      i1 = current - 1;
      i2 = current;
      i3 = current + 1;
      i4 = 0;
    } else if (current == projects.length - 1) {
      i1 = current - 1;
      i2 = current;
      i3 = 0;
      i4 = 1;
    } else if (current == 0) {
      i1 = projects.length - 1;
      i2 = current;
      i3 = current + 1;
      i4 = current + 2;
    } else {
      i1 = current - 1;
      i2 = current;
      i3 = current + 1;
      i4 = current + 2;
    }
    setCurrent(i3);
    setClasses((prev) => {
      let temp = [...prev];
      temp[i1] = "done-before";
      temp[i2] = "semi-active-before";
      temp[i3] = "active-project";
      temp[i4] = "semi-active-after";
      return temp;
    });
  }

  let projs = projects.map((p,i)=>{
    return <div className={"project " + classes[i]}> <Project {...p} image={images[i]}/></div>

  })
  return (
    <div id="project" className="projects d-flex align-items-center flex-column flex-lg-row">
      <h1 className="ps-lg-5 ms-lg-5 mt-5 mt-lg-0 pt-2 pt-lg-0">Projects</h1>
      <div className="projects-container">
        <button className="d-block arrow-up d-none d-lg-block " onClick={arrowUp}>
        <i className="fa-solid fa-chevron-up"></i>
        </button>
        <button className="d-block arrow-down d-none d-lg-block" onClick={arrowDown}>
        <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button className="d-block arrow-left d-lg-none" onClick={arrowUp}>
        <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="d-block arrow-right d-lg-none" onClick={arrowDown}>
        <i className="fa-solid fa-chevron-right"></i>
        </button>
        {projs}
      </div>
    </div>
  );
}
