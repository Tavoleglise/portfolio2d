import "./style.scss";
// data objects 
const contactList = [
  {
    contactPlataform: "linkedin",
    link: "https://www.linkedin.com/in/gustavoleglise/",
  },
  { contactPlataform: "github", link: "https://github.com/Tavoleglise" },
  {
    contactPlataform: "tavoleglise@gmail.com",
    link: "mailto:tavoleglise@gmail.com",
  },
];

const activitiesList = [
  { name: "freelancer", beginDate: "2022", endDate: "today" },
  {
    name: "Frontend web developer <span class='fade'>&</span> web designer <span class='fade'>at</span> parallaxink",
    beginDate: "2019",
    endDate: "2022",
  },
  {
    name: "unity developer <span class='fade'>at</span> Vector3",
    beginDate: "2016",
    endDate: "2018",
  },
];

const projectsList = [
  {
    name: "threejs",
    projects: [
      { name: "portfolio", link: "https://tavoleglise.vercel.app/" },
      { name: "realistic mask", link: "https://realistic-mask.vercel.app/" },
    ],
  },
];

//------------------------------------------------------------------------------
// Get elements & generate inicial html

const contactListElement = document.getElementById("contactList");
const activitiesListElement = document.getElementById("activitiesList");
const porjectsListElement = document.getElementById("projectsList");

let contactButtonsHtml = "";
let activityPeriodsHtml = "";
let projectsHtml = "";

//-----------------------------------------------------------------------------
// generate new html using data and push it to html element

contactList.forEach((contact) => {
  contactButtonsHtml += `<a class="button" href="${contact.link}" target="_blank">
                          <span class="border"></span>
                          <span class="label">${contact.contactPlataform}</span>
                          <span class="label-hover"> <span class="inner">${contact.contactPlataform}</span> </span>
                        </a>`;
});

contactListElement.innerHTML = contactButtonsHtml;

activitiesList.forEach((period) => {
  activityPeriodsHtml += `<div class="item">
                            <div class="name">${period.name}</div>
                            <div class="period">
                              <span class="date">${period.beginDate}</span>
                              <span class="arrow">></span>
                              <span class="date">${period.endDate}</span>
                            </div>
                          </div>`;
});

activitiesListElement.innerHTML = activityPeriodsHtml;

projectsList.forEach((projectGroup) => {
  projectsHtml += `<div class="item">
                  <div class="name">${projectGroup.name}</div>
                  ${projectGroup.projects.reduce(
                    (accumulator, currentValue) => {
                      return (accumulator += `<a class="button" href="${currentValue.link}" target="_blank">
                      <span class="border"></span>
                      <span class="label">${currentValue.name}</span>
                      <span class="label-hover">
                        <span class="inner">${currentValue.name}</span>
                      </span>
                    </a>`);
                    },
                    ""
                  )}
                </div>`;
});

porjectsListElement.innerHTML = projectsHtml;
