document.addEventListener("DOMContentLoaded", () => {
  let aboutButton = document.getElementById("about-button");
  let schoolButton = document.getElementById("school-button");
  let projectsButton = document.getElementById("projects-button");
  let homeButton = document.getElementById("home-button");
  let schoolImg = document.getElementById("school-img");
  let indirizzoImg = document.getElementById("indirizzo-img");
  let mapsImg = document.getElementById("maps-img");
  let body = document.getElementById("body");
  let centercontent = document.getElementById("center-content");
  let schooldiv = document.getElementById("school-div");
  let projectsdiv = document.getElementById("projects-div");
  let flappyMusicImg = document.getElementById("FlappyMusic-img");
  let flappyDefenseImg = document.getElementById("FlappyDefense-img");
  let profileImg = document.getElementById("profile-img");

  // ====================================================================

  aboutButton.addEventListener("click", () => {
    console.log("About button clicked");
    window.scrollTo({
      top: centercontent.offsetTop - 10,
      behavior: "smooth",
    });
  });

  schoolButton.addEventListener("click", () => {
    console.log("School button clicked");
    window.scrollTo({
      top: schooldiv.offsetTop - 10,
      behavior: "smooth",
    });
  });

  projectsButton.addEventListener("click", () => {
    console.log("Projects button clicked");
    window.scrollTo({
      top: projectsdiv.offsetTop - 10,
      behavior: "smooth",
    });
  });

  homeButton.addEventListener("click", () => {
    console.log("Home button clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ====================================================================
  flappyDefenseImg.addEventListener("click", () => {
    console.log("FlappyDefense img clicked");
    window.open("https://github.com/Uccetta110/FlappyDefense");
  });

  flappyMusicImg.addEventListener("click", () => {
    console.log("FlappyDefense img clicked");
    window.open("https://github.com/Uccetta110/FlappyMusic");
  });

  schoolImg.addEventListener("click", () => {
    console.log("School image clicked");
    window.open("https://www.itispaleocapa.edu.it/");
  });
  
  indirizzoImg.addEventListener("click", () => {
    console.log("School image clicked");
    window.open("https://www.itispaleocapa.edu.it/istituto/informatica/");
  });

  mapsImg.addEventListener("click", () => {
    console.log("School image clicked");
    window.open("https://www.itispaleocapa.edu.it/istituto/dove-siamo/");
  });

  // ====================================================================
  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 10) {
      homeButton.setAttribute("style", "visibility: visible;");
    } else {
      homeButton.setAttribute("style", "visibility: hidden;");
    }

    if ((window.scrollY < window.innerHeight * 0, 5 || window.scrollY == 0)) {
      //body.setAttribute("style", "background-color: #eef4ed");
    }
    if (
      (window.scrollY >= window.innerHeight &&
        window.scrollY < window.innerHeight * 2,
      1)
    ) {
      //body.setAttribute("style", "background-color: #8DA9C4");
    }
    if (window.scrollY >= window.innerHeight * 2.1) {
      // body.setAttribute("style", "background-color: #134074");
    }
  });
});
