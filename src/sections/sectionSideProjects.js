import { $el } from "../utils"
import { sectionTitleComponent } from "../components/sectionTitle";
import { textLight } from "../components/text";
import { title } from "../components/title";
import { tech } from "../components/tech";
import './sectionSideProjects.css'

const css = /*html*/`
  <style>
    .side_projects_box {
      width: 100%;
    }
    .side_projects {
      display: flex;
    }
    @media screen and (max-width: 768px) {
      .side_projects {
        flex-direction: column;
      }
    }
    .side_projects_job {
      position: relative;
      padding-bottom: 70px;
    }
    @media screen and (max-width: 768px) {
      .side_projects_job {
        padding-left: 50px;
      }
    }
    .side_projects_description {
      margin: 0;
    }
    @media screen and (max-width: 768px) {
      .side_projects_description {
        padding-left: 0;
        max-width: initial;
      }
    }
    .side_projects_description a {
      display: inline-block;
      color: inherit;
      text-decoration: none;
      margin: 0;
      font-weight: 600;
      font-size: 17px;
      text-transform: capitalize;
    }
    @media screen and (max-width: 768px) {
      .side_projects_description a {
        padding-top: 25px;
      }
    }
    .arrow_link span {
      position: relative;
      top: -8px;
    }
    .arrow_link svg {
      color: #007bff;
      position: relative;
      top: -2px;
      transition: transform 0.4s ease-out;
    }
    .arrow_link:hover > svg {
      transform: translateX(10px);
    }
    .side_projects_description p {
      margin: 0;
    }
    @media screen and (max-width: 768px) {
      .side_projects_description p {
        padding-top: 10px;
        flex-direction: column;
        align-items: center;
      }
    }
    .image {
      display: block;
      max-width: 100%;
    }
    .job_img {
      overflow: hidden;
      border-radius: 5px;
      margin-top: 10px;
      top: 0;
      left: 0;
      opacity: 0;
      transform: translateY(-50%);
      transform-origin: top;
      max-height: 0;
      transition: opacity 0.4s ease-out, transform 0.4s ease-out,
        max-height 0.4s ease-out;
    }
    .side_projects_job:hover > .job_img {
      transform: translateY(0);
      opacity: 1;
      max-height: 500px;
    }
  </style>
`

export const sideProjectsSectionComponent = ({ sectionTitle = '', items = [] } = {}) => {
  const html = /*html*/`
    <section class="side_projects">
        ${sectionTitleComponent(sectionTitle)}
        <div class="side_projects_box">
          ${items.map((e) => /*html*/`
            <div class="side_projects_job">
              <figcaption class="side_projects_description">
                <a class="arrow_link" href="${e.url}" target="blank">
                  <span> ${e.name} </span>
                </a>
                <p>
                  ${e.description}
                </p>
                <div class="flex wrap">
                  ${e.techs.map((e) => tech(e)).join('')}
                </div>
              </figcaption>
              <div class="job_img">
                <a href="${e.url}" target="blank">
                  <img class="image" src="${e.img}" alt="${e.name}" />
                </a>
              </div>
            </div>
          
          `).join('')}

        </div>
      </section>
  `;

  const skillComponent = $el({ template: html })
  return skillComponent
}