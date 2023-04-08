import { $el } from "../utils";
import './sectionIntroduction.css'

const introductionHtml = /*html*/`
	<div class="header">
		<h1>Hello</h1>
		<h2>
			I'm <span>Emmanuel Correa</span>, a front-end focused developer with
			design skills capable of bringing a ui design to life.
		</h2>
		<p>
			Get in touch <span class="hand">👉</span>
			<a class="email" href="mailto:ech.emmanuel.ch@gmail.com"
				>Email</a
			>
		</p>
	</div>
`;
const component = $el({ template: introductionHtml })
export default component