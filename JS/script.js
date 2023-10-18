//navBar links
let homePageLink = document.getElementById("homePage");
let projectsLink = document.getElementById("projects");
let aboutLink = document.getElementById("aboutme");
let contactLink = document.getElementById("contact");
let iOrderforUsButton = document.getElementById("iOrderforUsButton");
let f1KitButton = document.getElementById("f1KitButton");
var year = document.getElementById("year");
var currentYear = new Date().getFullYear();

homePageLink.addEventListener('click', () =>  {
    const mainPage = "/index.html"
    window.location.href = mainPage;
});

projectsLink.addEventListener('click', () =>  {
    const mainPage = "/index.html"
    window.location.href = mainPage;
});

aboutLink.addEventListener('click', () =>  {
    const targetSection = document.getElementById("aboutMeSection");
    console.log("Learn more about me")
    targetSection.scrollIntoView({ behavior: "smooth" });
});

contactLink.addEventListener('click', () =>  {
    const contactPage = "html/contact.html"
    window.location.href = contactPage;
});

iOrderforUsButton.addEventListener('click', () =>  {
    console.log("Learn more of i_OrderforUs")
    const iOrderforUsPage = "html/iOrderforUs.html";
    window.location.href = iOrderforUsPage;
});

f1KitButton.addEventListener('click', () =>  {
    console.log("Learn more of f1_Kit")
    const f1KitPage = "html/f1Kit.html";
    window.location.href = f1KitPage;
});

//set current year for footer
year.innerText = currentYear;