//navBar links
let projectsLink = document.getElementById("projects");
let aboutLink = document.getElementById("aboutme");
let contactLink = document.getElementById("contact");
let iOrderforUsButton = document.getElementById("iOrderforUsButton");
var year = document.getElementById("year");
var currentYear = new Date().getFullYear();

projectsLink.addEventListener('click', () =>  {
    const mainPage = "index.html"
    window.location.href = mainPage;
});

aboutLink.addEventListener('click', () =>  {
    console.log("About me link pressed")
});

contactLink.addEventListener('click', () =>  {
    const contactPage = "contact.html"
    window.location.href = contactPage;
});

iOrderforUsButton.addEventListener('click', () =>  {
    console.log("Learn more of i_OrderforUs")
    const iOrderforUsPage = "iOrderforUs.html";
    window.location.href = iOrderforUsPage;
});

//set current year for footer
year.innerText = currentYear;