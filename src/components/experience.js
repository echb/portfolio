import { $el } from "../utils"
import { sectionTitleComponent } from "./sectionTitle";
import { textLight } from "./text";
import { title } from "./title";

const css = /*html*/`
  <style>
    .experience {
      display: flex;
    }

    @media screen and (max-width: 768px) {
      .experience {
        flex-direction: column;
      }
    }

    .experience p {
      margin: 0;
    }

    .jobs {
      width: 100%;
      word-break: break-all;
      margin-bottom: 100px;
    }

    @media screen and (max-width: 768px) {
      .jobs {
        padding-left: 50px;
      }
    }

    .company {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    .company a {
      text-decoration: none;
      color: inherit;
    }

    .company h4 {
      margin: 0;
      font-weight: 900;
    }

    .company span {
      font-weight: 300;
    }

    .resume {
      font-size: 18px;
      font-weight: 700;
      color: inherit;
      text-decoration: none;
    }
    </style>
`

export const experienceSectionComponent = ({ sectionTitle = '', items = [] } = {}) => {
  const html = /*html*/`
    	<section class="experience">
          ${sectionTitleComponent(sectionTitle)}
          <div class="jobs">
            ${items.map((e) => `
                <div class="company">
                  <div>
                    <a href="${e.url}" target="blank">
                      ${title(e.name, true)}
                    </a>
                    <span>${e.date}</span>
                  </div>
                  ${textLight(e.role, true)}
                </div>
              `).join('')}
            <a class="resume" href="CV_English.docx.pdf" target="blank">View My Resume👉
            </a>
          </div>
      </section>
  `;

  const skillComponent = $el({ template: html, style: css })
  return skillComponent
}