import { $, $el } from "../utils";
import './toggle.css'

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