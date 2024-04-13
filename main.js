import "./style.scss";
// data objects
import { contactList, activitiesList, projectsList } from "./constants.js";

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
