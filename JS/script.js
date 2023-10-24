//navBar links
let homePageLink = document.getElementById("homePage");
let projectsLink = document.getElementById("projects");
let aboutLink = document.getElementById("aboutme");
let contactLink = document.getElementById("contact");
let iOrderforUsButton = document.getElementById("iOrderforUsButton");
let f1KitButton = document.getElementById("f1KitButton");
let spinnerButton = document.getElementById("spinnerButton");
var year = document.getElementById("year");
var currentYear = new Date().getFullYear();

document.getElementById("fccLink").addEventListener("click", function (e) {
    e.preventDefault();
    var link = document.getElementById("fccLink");
    var url = link.href;
    var newTab = window.open(url, "_blank");
});

document.getElementById("justItlink").addEventListener("click", function (e) {
    e.preventDefault();
    var link = document.getElementById("justItlink");
    var url = link.href;
    var newTab = window.open(url, "_blank");
});

document.getElementById("udemyLink").addEventListener("click", function (e) {
    e.preventDefault();
    var link = document.getElementById("udemyLink");
    var url = link.href;
    var newTab = window.open(url, "_blank");
});

document.getElementById("githubLink").addEventListener("click", function (e) {
    e.preventDefault();
    var link = document.getElementById("githubLink");
    var url = link.href;
    var newTab = window.open(url, "_blank");
});

homePageLink.addEventListener('click', () =>  {
    const mainPage = "/index.html"
    window.location.href = mainPage;
});

projectsLink.addEventListener('click', () =>  {
    const targetSection = document.getElementById("iosProject");
    targetSection.scrollIntoView({ behavior: "smooth" });
});

aboutLink.addEventListener('click', () =>  {
    const mainPage = "/index.html"
    window.location.href = mainPage;
});

contactLink.addEventListener('click', () =>  {
    const contactPage = "/HTML/contact.html"
    window.location.href = contactPage;
});

iOrderforUsButton.addEventListener('click', () =>  {
    console.log("Learn more of i_OrderforUs")
    const iOrderforUsPage = "/HTML/iOrderforUs.html";
    window.location.href = iOrderforUsPage;
});

f1KitButton.addEventListener('click', () =>  {
    console.log("Learn more of f1_Kit")
    const f1KitPage = "/HTML/f1Kit.html";
    window.location.href = f1KitPage;
});

spinnerButton.addEventListener("click", function (e) {
    e.preventDefault();
    const spinnerPage = "/HTML/spinner.html";
    var newTab = window.open(spinnerPage);
});

//set current year for footer
year.innerText = currentYear;