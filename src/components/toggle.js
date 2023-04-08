import { $, $el } from "../utils";
import './toggle.css'
const css = /*html*/`
  <style>
    .darkButton {
      display: inline-flex;
      justify-content: flex-end;
      position: absolute;
      width: auto;
      float: right;
      top: 30px;
      right: 30px;
    }
    .imgDark {
      filter: invert(1);
    }
    .pillDark {
      cursor: pointer;
      width: 45px;
      height: 25px;
      background: #bae67e;
      display: block;
      border-radius: 100px;
      position: relative;
      transition: background-color 0.2s ease-out;
      margin-left: 10px;
      margin-right: 10px;
    }
    .active .pillDarkActive {
      background: gray;
    }
    .round {
      transition: transform 0.2s ease-out, background-color 0.2s ease-out;
      position: absolute;
      top: 3px;
      left: 3px;
      width: 19px;
      height: 19px;
      background-color: #fff;
      border-radius: 100%;
    }
    .active .activeDarkPill {
      transform: translateX(100%);
    }
    .activeDark {
      background-color: #fff;
      color: #444452;
    }
  </style>
`;

const toggleHtml =/*html*/`
  	<div class="darkButton">
		<img
			src="https://iconoir.com/source/icons/half-moon.svg"
			alt=""
			class="imgDark"
		/>
		<div
			class="pillDark pillDarkActive"
		>
			<div
				class="round activeDarkPill"
			></div>
		</div>
		<img
			src="https://iconoir.com/source/icons/sun-light.svg"
			alt=""
			class="imgDark"
		/>
	</div>
`;

const body = $({ querySelector: 'body' })
const component = (u) => {
  const el = $el({ template: toggleHtml })
  el.addEventListener('click', () => {
    const isDark = body.dataset['theme'] === 'dark'
    if (isDark) {
      el.children[0].classList.add('active')
      body.dataset['theme'] = ''
    } else {
      el.children[0].classList.remove('active')
      body.dataset['theme'] = 'dark'
    }
  })
  return el
}

export default component