import { $el } from "../utils";
import './tech.css'

const css = /*html*/`
  <style>
    .techs {
      margin-top: 10px;
    }
    .techs p {
      color: #007bff;
      padding: 0px 5px;
      border: solid 1px #007bff;
      border-radius: 3px;
      text-transform: capitalize;
      display: inline-block;
      font-size: 14px;
      margin-bottom: 10px !important;
      margin-right: 10px !important;
    }
  </style>
`;

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