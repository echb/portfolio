export const $ = ({ querySelector = '' }) => document.querySelector(querySelector)
export const $all = ({ querySelectorAll = '' }) => document.querySelectorAll(querySelectorAll)

const newDiv = document.createElement("div");

/** Create a div element */
export const $el = ({ template = '' } = {}) => {
  const cloneDiv = newDiv.cloneNode(true);
  cloneDiv.innerHTML = `${template}`;
  return cloneDiv
}