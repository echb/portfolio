import './style.css';
import intro from './components/introduction.js'
import toggle from './components/toggle'
import { $ } from './utils';
import { skillSetComponent } from './components/skills';
import { jobs, projects, sideProjects, skills } from './store';
import { experienceSectionComponent } from './components/experience';
import { projectsSectionComponent } from './components/sectionProjects';
import { sideProjectsSectionComponent } from './components/sectionSideProjects';

let ss = 0

const header = $({ querySelector: 'header' })
const main = $({ querySelector: 'main' })
const ui = (e) => {
	// header.appendChild(jjj())
	// header.appendChild(jjj())
	// header.appendChild(jjj())
	header.appendChild(toggle())
	header.appendChild(intro)
	main.appendChild(skillSetComponent({ skillTitle: 'skills'.toUpperCase(), skills: skills }))
	main.appendChild(experienceSectionComponent({ sectionTitle: 'Experience'.toUpperCase(), items: jobs }))
	main.appendChild(projectsSectionComponent({ sectionTitle: 'Projects'.toUpperCase(), items: projects }))
	main.appendChild(sideProjectsSectionComponent({ sectionTitle: 'Side Projects'.toUpperCase(), items: sideProjects }))
}

ui()
// export const updateUi = () => {
// 	header.innerHTML = ''
// 	ss++
// 	ui()
// }