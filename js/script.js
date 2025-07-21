"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let aboutButton = document.getElementById("about-button");
    let schoolButton = document.getElementById("school-button");
    let projectsButton = document.getElementById("projects-button");
    let homeButton = document.getElementById("home-button");
    let schoolImg = document.getElementById("school-img");
    let indirizzoImg = document.getElementById("indirizzo-img");
    let mapsImg = document.getElementById("maps-img");
    let centercontent = document.getElementById("center-content");
    let schooldiv = document.getElementById("school-div");
    let projectsdiv = document.getElementById("projects-div");
    let flappyMusicImg = document.getElementById("FlappyMusic-img");
    let flappyDefenseImg = document.getElementById("FlappyDefense-img");
    aboutButton === null || aboutButton === void 0 ? void 0 : aboutButton.addEventListener("click", () => {
        console.log("About button clicked");
        if (centercontent)
            window.scrollTo({
                top: centercontent.offsetTop - 10,
                behavior: "smooth",
            });
    });
    schoolButton === null || schoolButton === void 0 ? void 0 : schoolButton.addEventListener("click", () => {
        console.log("School button clicked");
        if (schooldiv)
            window.scrollTo({
                top: schooldiv.offsetTop - 10,
                behavior: "smooth",
            });
    });
    projectsButton === null || projectsButton === void 0 ? void 0 : projectsButton.addEventListener("click", () => {
        console.log("Projects button clicked");
        if (projectsdiv)
            window.scrollTo({
                top: projectsdiv.offsetTop - 10,
                behavior: "smooth",
            });
    });
    homeButton === null || homeButton === void 0 ? void 0 : homeButton.addEventListener("click", () => {
        console.log("Home button clicked");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    flappyDefenseImg === null || flappyDefenseImg === void 0 ? void 0 : flappyDefenseImg.addEventListener("click", () => {
        console.log("FlappyDefense img clicked");
        window.open("https://github.com/Uccetta110/FlappyDefense");
    });
    flappyMusicImg === null || flappyMusicImg === void 0 ? void 0 : flappyMusicImg.addEventListener("click", () => {
        console.log("FlappyDefense img clicked");
        window.open("https://github.com/Uccetta110/FlappyMusic");
    });
    schoolImg === null || schoolImg === void 0 ? void 0 : schoolImg.addEventListener("click", () => {
        console.log("School image clicked");
        window.open("https://www.itispaleocapa.edu.it/");
    });
    indirizzoImg === null || indirizzoImg === void 0 ? void 0 : indirizzoImg.addEventListener("click", () => {
        console.log("School image clicked");
        window.open("https://www.itispaleocapa.edu.it/istituto/informatica/");
    });
    mapsImg === null || mapsImg === void 0 ? void 0 : mapsImg.addEventListener("click", () => {
        console.log("School image clicked");
        window.open("https://www.itispaleocapa.edu.it/istituto/dove-siamo/");
    });
    document.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY > 10) {
            homeButton === null || homeButton === void 0 ? void 0 : homeButton.setAttribute("style", "visibility: visible;");
        }
        else {
            homeButton === null || homeButton === void 0 ? void 0 : homeButton.setAttribute("style", "visibility: hidden;");
        }
        if ((window.scrollY < window.innerHeight * 0.5 || window.scrollY == 0)) {
        }
        if ((window.scrollY >= window.innerHeight &&
            window.scrollY < window.innerHeight * 2,
            1)) {
        }
        if (window.scrollY >= window.innerHeight * 2.1) {
        }
    });
});
//# sourceMappingURL=script.js.map