import projects from "./projects.js";

window.onscroll = function () {
  var name = document.querySelector(".brand-name");
  // Get the landing div element
  var landing = document.querySelector(".landing");
  // Get it's position in the viewport
  var landingvp = landing.getBoundingClientRect();
  //if it's visible, set the color of brand-name to dim -- else, light it up
  if (checkvp(landingvp)) {
    name.style.color = "#212529";
  } else {
    name.style.color = "#97d3df";
  }
};

function checkvp(bounding) {
  if (bounding.top < window.innerHeight && bounding.bottom >= 500) {
    return true;
  } else {
    return false;
  }
}

function typewriter(landingline1, landingline2, landingline3) {
  switch (flag) {
    case 1:
      landingline1.innerText = str1.substring(0, ptr + 1) + "|";
      ptr += 1;
      if (ptr == str1.length + 1) {
        landingline1.innerText = str1;
        flag = 2;
        ptr = 0;
      }
      break;

    case 2:
      landingline2.innerText = str2.substring(0, ptr) + "|";
      ptr += 1;
      if (ptr == str2.length + 1) {
        landingline2.innerText = str2;
        flag = 3;
        ptr = 0;
      }
      break;

    case 3:
      landingline3.innerText = str3.substring(0, ptr) + "|";
      ptr += 1;
      if (ptr == str3.length + 1) {
        landingline3.innerText = str3;
        flag = 0;
        clearInterval(myInterval);
      }
  }
}

function buildIframe(projDisplay, src) {
  var frame = document.createElement("iframe");
  frame.setAttribute("src", src);
  frame.setAttribute("width", "100%");
  frame.setAttribute("height", "100%");
  frame.style.margin = "0 auto";
  frame.style.border = "solid #212529 5px";
  projDisplay.append(frame);
}

// variables used for typwwriter animation
let str1 = "Hello World!";
let str2 = "I'm Mariam Atef.";
let str3 = "A web developer based in Egypt.";
let flag = 1;
let ptr = 1;
var myInterval;

window.onload = function () {
  //Typewriter effect in landing
  let landingline1 = document.querySelector(".l1");
  let landingline2 = document.querySelector(".l2");
  let landingline3 = document.querySelector(".l3");

  myInterval = setInterval(
    typewriter,
    80,
    landingline1,
    landingline2,
    landingline3
  );

  // displaying projects

  var firstProj = projects[0]; // First project reference

  // ------------------------------------
  // 1st: Small Screens:
  // -------------------------------------

  // Building NavBar:

  let carouselMobile = document.querySelector(
    "#mobileNavProjects .carousel-inner"
  );
  let projDisplay = document.querySelector(".disp-proj");
  let aboutProj = document.querySelector(".about-proj");

  for (let project of projects) {
    // Create Element
    var element = document.createElement("div");
    if (project == firstProj) {
      element.classList.add("carousel-item", "active", "text-center");
    } else {
      element.classList.add("carousel-item", "text-center");
    }
    element.innerText = project.name;

    // Append to Container
    carouselMobile.append(element);
  }

  // Displaying Currently Active Project

  // A) default on load --> 1st Project

  // get first project's attributes
  let src = firstProj.source;

  // load the display
  buildIframe(projDisplay, src);

  // Displaying its about section
  aboutProj.innerHTML = firstProj.about;

  // B) On Changing the Slide

  document
    .querySelector("#mobileNavProjects")
    .addEventListener("slide.bs.carousel", () => {
      switchProject("mobile");
    });

  // ------------------------------------
  // 2nd: Large Screens:
  // -------------------------------------

  // Building NavBar:

  let projSideBar = document.querySelector(".side-nav-proj");

  for (let project of projects) {
    // Create Element

    var element = document.createElement("button");
    if (project == firstProj) {
      element.classList.add("btn", "text-md-left", "active-project");
    } else {
      element.classList.add("btn", "text-md-left");
    }
    element.innerText = project.name;

    // adding activation on click event
    element.addEventListener("click", function () {
      this.classList.add("active-project");
      let innertextis = this.innerHTML;
      let siblings = Array.from(projSideBar.children);
      siblings.forEach((element) => {
        if (element.innerHTML !== innertextis) {
          element.classList.remove("active-project");
        }
      });
    });

    // Append to Container
    projSideBar.append(element);
  }

  // Displaying Currently Active Project On Changing the tab

  document.querySelector(".side-nav-proj").addEventListener("click", () => {
    switchProject("desktop");
  });

  // handling switching between projects
  function switchProject(parent) {
    // fade out effect
    projDisplay.style.animation = "fade-out 0.8s linear forwards";
    projDisplay.style.webkitAnimation = "fade-out 0.8s linear forwards";

    // delay to catch the new active slide

    setTimeout(() => {
      projDisplay.classList.add("play-fade-out");
      projDisplay.innerHTML = ""; // clear container
      if (parent == "mobile")
        var children = Array.from(carouselMobile.children);
      else var children = Array.from(projSideBar.children);

      let active = children.filter((element) =>
        element.classList.contains(
          parent == "mobile" ? "active" : "active-project"
        )
      )[0].innerText;
      active = projects.filter((project) => project.name == active);
      let src = active[0].source;

      buildIframe(projDisplay, src);

      // fade in effect
      projDisplay.style.animation = "fade-in 0.8s linear forwards";
      projDisplay.style.webkitAnimation = "fade-in 0.8s linear forwards";

      // Displaying its about section
      aboutProj.innerHTML = active[0].about;
    }, 800);
  }
};
