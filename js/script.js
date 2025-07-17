document.addEventListener("DOMContentLoaded", () => {
  let aboutButton = document.getElementById("about-button");
  let schoolButton = document.getElementById("school-button");
  let projectsButton = document.getElementById("projects-button");
  let homeButton = document.getElementById("home-button");
  let schoolImg = document.getElementById("school-img");
  let indirizzoImg = document.getElementById("indirizzo-img");
  let mapsImg = document.getElementById("maps-img");
  let body = document.getElementById("body");

  aboutButton.addEventListener("click", () => {
    console.log("About button clicked");
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  });
  schoolButton.addEventListener("click", () => {
    console.log("School button clicked");
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  });
  projectsButton.addEventListener("click", () => {
    console.log("Projects button clicked");
    window.scrollTo({
      top: 1500,
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

  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 10) {
      homeButton.setAttribute("style", "visibility: visible;");
    } else {
      homeButton.setAttribute("style", "visibility: hidden;");
    }

    if (window.scrollY < 600) {
      body.setAttribute("style", "background-color: #eef4ed");
    }
    if (window.scrollY >= 600 && window.scrollY < 1400) {
      body.setAttribute("style", "background-color: #8DA9C4");
    }
    if (window.scrollY >= 1400) {
      body.setAttribute("style", "background-color: #134074");
    }
  });
});
