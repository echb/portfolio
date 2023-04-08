import { $el } from "../utils"
import './sectionTitle.css'

export const sectionTitleComponent = (text = '') => {
  const html = /*html*/`
  <div>
    <h3 class="section_title">${text}</h3>
  </div>
  `;
  const component = $el({ template: html })
  return component.innerHTML
}