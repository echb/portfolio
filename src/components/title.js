import { $el } from "../utils"

export const title = (text = '', resetMaargin = false) => {
  const html = /*html*/`
    <h3 class="title ${resetMaargin ? 'm0' : ''}">${text}</h3>
      `;
  const component = $el({ template: html })
  return component.innerHTML
}