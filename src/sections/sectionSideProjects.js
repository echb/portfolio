import { $el } from "../utils"
import { sectionTitleComponent } from "../components/sectionTitle";
import { textLight } from "../components/text";
import { title } from "../components/title";
import { tech } from "../components/tech";
import './sectionSideProjects.css'

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