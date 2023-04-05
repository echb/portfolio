export const $ = ({ querySelector = '' }) => document.querySelector(querySelector)
export const $all = ({ querySelectorAll = '' }) => document.querySelectorAll(querySelectorAll)

const newDiv = document.createElement("div");

/** Create a div element */
export const $el = ({ template = '', style = '', } = {}) => {
  const cloneDiv = newDiv.cloneNode(true);
  cloneDiv.innerHTML = `${style} ${template}`;
  return cloneDiv
}
