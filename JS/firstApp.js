//navBar links
let homePageLink = document.getElementById("homePage");
let projectsLink = document.getElementById("projects");
let aboutLink = document.getElementById("aboutme");
let contactLink = document.getElementById("contact");
let githubButton = document.getElementById("firstAppGithubButton")
var year = document.getElementById("year");
var currentYear = new Date().getFullYear();

document.getElementById("firstAppGithubLink").addEventListener("click", function (e) {
    e.preventDefault();
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
    var link = document.getElementById("firstAppGithubLink");
            var url = link.href;
            var newTab = window.open(url, "_blank");
});

//set current year for footer
year.innerText = currentYear;