import { $el } from "../utils"
import { sectionTitleComponent } from "../components/sectionTitle";
import { textLight } from "../components/text";
import { title } from "../components/title";
import './sectionProjects.css'

export const projectsSectionComponent = ({ sectionTitle = '', items = [] } = {}) => {
  const html = /*html*/`
    	<section class="projects">
        ${sectionTitleComponent(sectionTitle)}
        <div>
          ${items.map((e) => `
          <div class="job">
              <div>
                <a href="${e.url}" target="blank">
                  <img class="image" src="${e.img}" alt="${e.name}" />
                </a>
              </div>
              <figcaption class="projec_description">
                <a href="${e.url}" target="blank">
                  <span> ${e.name} </span>
                </a>
                ${textLight(e.description)}
              </figcaption>
            </div>
            `).join('')}
        </div>
    </section>
  `;

  const skillComponent = $el({ template: html })
  return skillComponent
}