document.addEventListener("DOMContentLoaded", () => {
  let aboutButton = document.getElementById("about-button");
  let schoolButton = document.getElementById("school-button");
  let projectsButton = document.getElementById("projects-button");

  aboutButton.addEventListener("click", () => {
    console.log("About button clicked");
  });
  schoolButton.addEventListener("click", () => {
    console.log("School button clicked");
  });
  projectsButton.addEventListener("click", () => {
    console.log("Projects button clicked");
  });
});
