import { $el } from "../utils"

export const textLight = (text = '', capitalize = false) => {
  const html = /*html*/`
    <p class="text_light ${capitalize ? 'capitalize' : ''}">${text}</p>
  `;
  const component = $el({ template: html })
  return component.innerHTML
}