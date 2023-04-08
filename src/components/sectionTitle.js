import { $el } from "../utils"
import './sectionTitle.css'
const css = /*html*/`
  <style>
    .section_title {
      min-width: 125px;
      max-width: 125px;
      width: 125px;
      font-size: 18px;
      margin: 0;
      padding: 0;
      width: 200px;
      margin-right: 70px;
      text-transform: uppercase;
      color: #007bff;
      text-align: right;
      letter-spacing: 2px;
      position: sticky;
      top: 20px;
    }
    @media screen and (max-width: 1024px) {
      .section_title {
        margin-right: 50px;
        width: 150px;
      }
    }
    @media screen and (max-width: 768px) {
      .section_title {
        text-align: left;
        width: initial;
        margin: 0;
        width: auto;
        margin-bottom: 30px;
      }
    }
  </style>
`;



export const sectionTitleComponent = (text = '') => {
  const html = /*html*/`
  <div>
    <h3 class="section_title">${text}</h3>
  </div>
  `;
  const component = $el({ template: html })
  return component.innerHTML
}