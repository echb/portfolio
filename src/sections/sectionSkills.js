import { $el } from "../utils"
import { sectionTitleComponent } from "../components/sectionTitle";
import { textLight } from "../components/text";
import { title } from "../components/title";
import './sectionSkills.css'

export const skillSetComponent = ({ skillTitle = '', skills = [] } = {}) => {
  const html = /*html*/`
    <section class="skills">
      ${sectionTitleComponent(skillTitle)}
      <div class="skillsBox">
        ${skills.map((e) => `
          <div>
            ${title(e.name)}
            <ul>
              ${e.skillName.map((e) => `${textLight(e, true)}`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  const skillComponent = $el({ template: html })
  return skillComponent
}