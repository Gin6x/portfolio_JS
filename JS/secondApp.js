//navBar links
let homePageLink = document.getElementById("homePage");
let projectsLink = document.getElementById("projects");
let aboutLink = document.getElementById("aboutme");
let contactLink = document.getElementById("contact");
var year = document.getElementById("year");
var currentYear = new Date().getFullYear();
let githubButton = document.getElementById("secondAppGithubButton")
let youtubeButton = document.getElementById("secondAppYoutubeButton")

document.getElementById("secondAppGithubLink").addEventListener("click", function (e) {
    e.preventDefault();
});

document.getElementById("secondAppYoutubeLink").addEventListener("click", function (e) {
    e.preventDefault();
});

document.getElementById("githubLink").addEventListener("click", function (e) {
    e.preventDefault();
    var link = document.getElementById("githubLink");
    var url = link.href;
    var newTab = window.open(url, "_blank");
});

homePageLink.addEventListener('click', () =>  {
    const homePage = "/index.html"
    window.location.href = homePage;
});

projectsLink.addEventListener('click', () =>  {
    const mainPage = "/index.html"
    window.location.href = mainPage;
});

aboutLink.addEventListener('click', () =>  {
    const mainPage = "/index.html"
    window.location.href = mainPage;
});

contactLink.addEventListener('click', () =>  {
    const contactPage = "contact.html"
    window.location.href = contactPage;
});

githubButton.addEventListener('click', () =>  {
    var link = document.getElementById("secondAppGithubLink");
            var url = link.href;
            var newTab = window.open(url, "_blank");
});

youtubeButton.addEventListener('click', () =>  {
    var link = document.getElementById("secondAppYoutubeLink");
            var url = link.href;
            var newTab = window.open(url, "_blank");
});

//set current year for footer
year.innerText = currentYear;