//navBar links
let projectsLink = document.getElementById("projects");
let aboutLink = document.getElementById("aboutme");
let contactLink = document.getElementById("contact");
let iOrderforUsButton = document.getElementById("iOrderforUsButton");
var year = document.getElementById("year");
var currentYear = new Date().getFullYear();

projectsLink.addEventListener('click', () =>  {
    console.log("Projects link pressed")
});

aboutLink.addEventListener('click', () =>  {
    console.log("About me link pressed")
});

contactLink.addEventListener('click', () =>  {
    console.log("Contact me link pressed")
});

iOrderforUsButton.addEventListener('click', () =>  {
    console.log("Learn more of i_OrderforUs")
});

//set current year for footer
year.innerText = currentYear;