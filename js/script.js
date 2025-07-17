document.addEventListener("DOMContentLoaded", () => {
  let aboutButton = document.getElementById("about-button");
  let schoolButton = document.getElementById("school-button");
  let projectsButton = document.getElementById("projects-button");
  let homeButton = document.getElementById("home-button");
  let schoolImg = document.getElementById("school-img");
  let indirizzoImg = document.getElementById("indirizzo-img");

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

  document.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      homeButton.setAttribute("style", "visibility: visible;");
    } else {
      homeButton.setAttribute("style", "visibility: hidden;");
    }
  });
});
