/* Typewriter effect*/

let flag = 1;
let ptr = 1;
var myInterval;

function typewriter(landingline1, landingline2, landingline3, landingline4) {


    switch (flag) {
        case 1:
            landingline1.innerHTML = str1.substring(0, ptr + 1) + "|";
            ptr += 1;
            if (ptr == str1.length + 1) {
                landingline1.innerHTML = str1;
                flag = 2;
                ptr = 0;
            }
            break;

        case 2:
            landingline2.innerHTML = str2.substring(0, ptr) + "|";
            ptr += 1;
            if (ptr == str2.length + 1) {
                landingline2.innerHTML = str2;
                flag = 3;
                ptr = 0;
            }
            break;

        case 3:
            landingline3.innerHTML = str3.substring(0, ptr) + "|";
            ptr += 1;
            if (ptr == str3.length + 1) {
                landingline3.innerHTML = str3;
                flag = 4;
                ptr = 0;
            }
            break;
        case 4:
            landingline4.innerHTML = str4;
            flag = 0;
            clearInterval(myInterval);


    }
}

let str1 = "Hello World!";
let str2 = "I'm Mariam Atef.";
let str3 = "A web developer based in Egypt who has studied computer engineering at Alexandria's University, with 2-year-experience in frontend development using frameworks & libraries like React.js, Bootstrap & Redux, and 1 year in backend development using Native PHP, Node.js/Express & Spring Boot, and databases like MySQl, MongoDB & Firebase. Want to know more about me?";
let str4 = "<a href='https://drive.google.com/drive/folders/1g3mJLRiWtXGj10i2igbu4mo175dXc-Wl?usp=share_link' class='resume-link'>Check my resume!</a>";


document.addEventListener('DOMContentLoaded', function () {
    //Typewriter effect in landing
    console.log('loaded')
    let landingline1 = document.querySelector(".l1");
    let landingline2 = document.querySelector(".l2");
    let landingline3 = document.querySelector(".l3");
    let landingline4 = document.querySelector(".l4");

    myInterval = setInterval(
        typewriter,
        50,
        landingline1,
        landingline2,
        landingline3,
        landingline4
    );

});
document.addEventListener('DOMContentLoaded', function() {
    // The DOM is ready, but we want to wait for a specific element
    function checkForElement() {
      const targetElement = document.querySelector('.landing')
  
      if (targetElement) {
        let landingline1 = document.querySelector(".l1");
        let landingline2 = document.querySelector(".l2");
        let landingline3 = document.querySelector(".l3");
        let landingline4 = document.querySelector(".l4");
    
        myInterval = setInterval(
            typewriter,
            50,
            landingline1,
            landingline2,
            landingline3,
            landingline4
        );
      } else {
        setTimeout(checkForElement, 100); // Check again in 100 milliseconds
      }
    }
    // Start checking for the element
    checkForElement();
  });
  
  function yourFunction(targetElement) {
    // Your code to manipulate the target element goes here
  }
  

/* navbar scroll hiding */

var lastScrollTop; // This Varibale will store the top position

window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar'); // Get The NavBar
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    //This line will get the location on scroll

    if (scrollTop > lastScrollTop) { //if it will be greater than the previous
        navbar.style.top = '-80px';
        //set the value to the negetive of height of navbar 
    }

    else {
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

