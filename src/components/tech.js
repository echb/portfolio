import { $el } from "../utils";
import './tech.css'

export const tech = (text = '') => {
  const html = /*html*/`
    <div class="techs">
      <p>
        ${text}
      </p>
    </div>
  `;
  const component = $el({ template: html })
  return component.innerHTML
}