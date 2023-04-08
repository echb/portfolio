import { $el } from "../utils"
import { sectionTitleComponent } from "../components/sectionTitle";
import { textLight } from "../components/text";
import { title } from "../components/title";
import './sectionSkills.css'

const css = /*html*/`
  <style>
    .skills {
      display: flex;
      justify-content: flex-start;
    }
    @media screen and (max-width: 768px) {
      .skills {
        flex-direction: column;
      }
    }
    .skillsBox {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      row-gap: 20px;
      column-gap: 50px;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      .skillsBox {
        padding-top: 30px;
        padding-left: 50px;
      }
    }
    .skillsBox h3 {
      margin: 0;
    }
    .skillsBox ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .skillsBox ul li {
      text-transform: capitalize;
    }
  </style>
`;


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