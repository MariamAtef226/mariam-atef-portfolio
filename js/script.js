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

window.onload = function () {
  //Typewriter effect in landing

  str1 = "Hello World!";
  str2 = "I'm Mariam Atef.";
  str3 = "A web developer based in Egypt.";
  landingline1 = document.querySelector(".l1");
  landingline2 = document.querySelector(".l2");
  landingline3 = document.querySelector(".l3");

  flag = 1;
  ptr = 1;

  myInterval = setInterval(typewriter, 80);

  // -- Loading Projects in Project Section --

  // When adding new project, introduce it in each of the following 3 structures:

  // structure 1
  const projects = ["Sure Wheels", "BookArt Shop", "Pour Elle", "Ducktionary"];

  // structure 2
  const projectSource = Array();
  projectSource["Sure Wheels"] =
    "https://www.youtube.com/embed/D3pLPoz0UhA?autoplay=1&mute=1&controls=0&loop=1";
  projectSource["BookArt Shop"] =
    "https://mariamatef226.github.io/bookartalex/";
  projectSource["Pour Elle"] = "https://mariamatef226.github.io/pourelle/";
  projectSource["Ducktionary"] =
    "https://www.youtube.com/embed/mOdyblwMmNg?autoplay=1&mute=1&controls=0&loop=1";

  // structure 3
  const aboutProject = Array();

  aboutProject["Sure Wheels"] =
    "Sure Wheels is a dynamic website for a virtual car rental business, where a customer\
   can view and rent cars. Also, they can place a review upon their rental experiences.\
    <br> The website includes an admin module for the owners to monitor reservations, revenue and other business data.\
   The database is implemented using RDBMS - MySQL and the backend is implemented using PHP. The frontend was done\
    using HTML, CSS, Bootstrap4/5 and JavaScript. It was a team project for uni. I was responsible for the backend portion,\
     in addition to applying responstivity to the website.<br>\
     <a class='text-decoration-none text-info'href='wheels.000webhostapp.com/customer_module/home.php'>Pay a visit to the Website? Click here!</a>\
     <br><i class='text-warning' style='font-size:1rem;'>PS: use VPN, since 000webhost isn't working on all ISPs</i>";
     

  aboutProject["BookArt Shop"] =
    "BookArt Shop is a static business portfolio for my small business, BookArt Shop. The website includes information\
   about the owner and the business itself, in addition to displaying the products sold. Stickers & Other Products pages are still under\
    construction. The wesbite is responsive on all devices. It was implemented using native tools (HTML, CSS, JavaScript & Bootstrap 5).\
     The website follows Bondi design. It's an individual personal project.<br>\
     <a class='text-decoration-none text-info'href='https://mariamatef226.github.io/bookartalex/'>Pay a visit to the Website? Click here!</a>";

  aboutProject["Pour Elle"] =
    "Pour Elle is a static website for women care that uses Bondi design scheme. The website is still under construction.\
   It was implemented using HTML, CSS, Bootstrap5 & JavaScript. It was a final project for an online frontend course and it was an individual project.\
  Responsivness is supported on all devices.<br>\
  <a class='text-decoration-none link-info'href='https://mariamatef226.github.io/pourelle/'>Pay a visit to the Website? Click here!</a>";

  aboutProject["Ducktionary"] =
    "A Python desktop application of an offline english dictionary. Useful in case of lack of internet connection for people who are studying\
   English or reading a book & have met a word they're unfamiliar with and would like to know its meaning (defintion). The user would enter the meant word, and the\
    application would display its english definition.<br> The application is implemented using Python 3. The algorithm is based on Red-black trees\
    data structure, which supports good response time. Finally, the source of the dictionary is Merriam-Webster's dictionary.";

  firstProj = projects[0]; // First project reference

  // ------------------------------------
  // 1st: Small Screens:
  // -------------------------------------

  // Building NavBar:

  let carouselMobile = document.querySelector(
    "#mobileNavProjects .carousel-inner"
  );
  let projDisplay = document.querySelector(".disp-proj");
  let aboutProj = document.querySelector(".about-proj");

  for (let name of projects) {
    // Create Element

    var element = document.createElement("div");
    if (name == firstProj) {
      element.classList.add("carousel-item", "active", "text-center");
    } else {
      element.classList.add("carousel-item", "text-center");
    }
    element.innerText = name;

    // Append to Container

    carouselMobile.append(element);
  }

  // Displaying Currently Active Project

  // A) default on load --> 1st Project
  // get first project's attributes

  // let type = projects.get(firstProj);
  let src = projectSource[firstProj];

  // load the display -- """" the else clause to be modified """"

  var frame = document.createElement("iframe");
  frame.setAttribute("src", src);
  frame.setAttribute("width", "100%");
  frame.setAttribute("height", "100%");
  frame.style.margin = "0 auto";
  frame.style.border = "solid #212529 5px";
  projDisplay.append(frame);

  // Displaying its about section
  aboutProj.innerHTML = aboutProject[firstProj];

  // B) On Changing the Slide

  document
    .querySelector("#mobileNavProjects")
    .addEventListener("slide.bs.carousel", function (e) {
      // fade out effect
      projDisplay.style.animation = "fade-out 0.8s linear forwards";
      projDisplay.style.webkitAnimation = "fade-out 0.8s linear forwards";

      // delay to catch the new active slide

      setTimeout(() => {
        projDisplay.classList.add("play-fade-out");

        projDisplay.innerHTML = ""; // clear container

        let children = Array.from(carouselMobile.children);
        active = children.filter((element) =>
          element.classList.contains("active")
        )[0].innerText;

        let src = projectSource[active];

        var frame = document.createElement("iframe");
        frame.setAttribute("src", src);
        frame.setAttribute("width", "100%");
        frame.setAttribute("height", "100%");
        frame.style.margin = "0 auto";
        frame.style.border = "solid #212529 5px";
        projDisplay.append(frame);

        // fade in effect

        projDisplay.style.animation = "fade-in 0.8s linear forwards";
        projDisplay.style.webkitAnimation = "fade-in 0.8s linear forwards";

        // Displaying its about section
        aboutProj.innerHTML = aboutProject[active];
      }, 800);
    });

  // ------------------------------------
  // 2nd: Large Screens:
  // -------------------------------------

  // Building NavBar:

  let projSideBar = document.querySelector(".side-nav-proj");

  for (let name of projects) {
    // Create Element

    var element = document.createElement("button");
    if (name == firstProj) {
      element.classList.add("btn", "text-md-left", "active-project");
    } else {
      element.classList.add("btn", "text-md-left");
    }
    element.innerText = name;

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

  // Displaying Currently Active Project

  // On Changing the tab

  document
    .querySelector(".side-nav-proj")
    .addEventListener("click", function (e) {
      // fade out effect
      projDisplay.style.animation = "fade-out 0.8s linear forwards";
      projDisplay.style.webkitAnimation = "fade-out 0.8s linear forwards";

      // delay to allow animation

      setTimeout(() => {
        projDisplay.innerHTML = ""; // clear container

        let children = Array.from(projSideBar.children);
        active = children.filter((element) =>
          element.classList.contains("active-project")
        )[0].innerText;

        let src = projectSource[active];

        var frame = document.createElement("iframe");
        frame.setAttribute("src", src);
        frame.setAttribute("width", "100%");
        frame.setAttribute("height", "100%");
        frame.style.margin = "0 auto";
        frame.style.border = "solid #212529 5px";
        projDisplay.append(frame);

        // fade in effect

        projDisplay.style.animation = "fade-in 0.8s linear forwards";
        projDisplay.style.webkitAnimation = "fade-in 0.8s linear forwards";

        // Displaying its about section
        aboutProj.innerHTML = aboutProject[active];
      }, 800);
    });
};

function typewriter() {
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

// To do:

// write content for project
// dynamic height for project
