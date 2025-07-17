document.addEventListener("DOMContentLoaded", () => {
  let aboutButton = document.getElementById("about-button");
  let schoolButton = document.getElementById("school-button");
  let projectsButton = document.getElementById("projects-button");

  aboutButton.addEventListener("click", () => {
    console.log("About button clicked");
    window.scrollBy({
      top: 200,
      behavior: "smooth"
    });
  });
  schoolButton.addEventListener("click", () => {
    console.log("School button clicked");
        window.scrollBy({
      top: 400,
      behavior: "smooth"
    });
  });
  projectsButton.addEventListener("click", () => {
    console.log("Projects button clicked");
        window.scrollBy({
      top: 600,
      behavior: "smooth"
    });
  });
  document.addEventListener("scroll", () => {
    if (window.scrollY > 10) {

    }
  });
});
