(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const m=({querySelector:i=""})=>document.querySelector(i),g=document.createElement("div"),s=({template:i="",style:t=""}={})=>{const n=g.cloneNode(!0);return n.innerHTML=`${t} ${i}`,n},x=`
	<style>
		.header {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			height: 100vh;
			height: 100dvh;
			font-weight: 400;
		}
		.header h1,
		.header h2 {
			font-size: 2.5rem;
			max-width: 700px;
			font-weight: 400;
		}
		.header h2 {
			line-height: 1.5;
		}
		@media screen and (max-width: 1024px) {
			.header h1,
			.header h2 {
				font-size: 2.2rem;
			}
		}
		@media screen and (max-width: 768px) {
			.header h1,
			.header h2 {
				font-size: 2rem;
			}
		}
		@media screen and (max-width: 550px) {
			.header h1,
			.header h2 {
				font-size: 1.8rem;
			}
		}
		.header p {
			font-weight: 600;
			font-size: 1.2rem;
		}
		@media screen and (max-width: 550px) {
			.header p {
				font-size: 1rem;
			}
		}
		.header span {
			font-weight: 700;
		}
		.email {
			color: inherit;
		}
		.hand {
			position: relative;
			top: -3px;
		}
	</style>
`,f=`
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
`,b=s({template:f,style:x}),w=`
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
`,v=`
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
`,d=m({querySelector:"body"}),y=i=>{const t=s({template:v,style:w});return t.addEventListener("click",()=>{d.dataset.theme==="dark"?(t.children[1].classList.add("active"),d.dataset.theme=""):(t.children[1].classList.remove("active"),d.dataset.theme="dark")}),t},k=`
  <style>
    .section_title {
      min-width: 125px;
      max-width: 125px;
      width: 125px;
      font-size: 18px;
      margin: 0;
      padding: 0;
      width: 200px;
      margin-right: 70px;
      text-transform: uppercase;
      color: #007bff;
      text-align: right;
      letter-spacing: 2px;
      position: sticky;
      top: 20px;
    }
    @media screen and (max-width: 1024px) {
      .section_title {
        margin-right: 50px;
        width: 150px;
      }
    }
    @media screen and (max-width: 768px) {
      .section_title {
        text-align: left;
        width: initial;
        margin: 0;
        width: auto;
        margin-bottom: 30px;
      }
    }
  </style>
`,c=(i="")=>{const t=`
  <div>
    <h3 class="section_title">${i}</h3>
  </div>
  `;return s({template:t,style:k}).innerHTML},l=(i="",t=!1)=>{const n=`
    <p class="text_light ${t?"capitalize":""}">${i}</p>
  `;return s({template:n}).innerHTML},u=(i="",t=!1)=>{const n=`
    <h3 class="title ${t?"m0":""}">${i}</h3>
      `;return s({template:n}).innerHTML},j=`
  <style>
    .skills {
      display: flex;
      justify-content: flex-start;
    }
    @media screen and (max-width: 768px) {
      .skills {
        flex-direction: column;
      }
    }
    .skillsBox {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      row-gap: 20px;
      column-gap: 50px;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      .skillsBox {
        padding-top: 30px;
        padding-left: 50px;
      }
    }
    .skillsBox h3 {
      margin: 0;
    }
    .skillsBox ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .skillsBox ul li {
      text-transform: capitalize;
    }
  </style>
`,$=({skillTitle:i="",skills:t=[]}={})=>{const n=`
    <section class="skills">
      ${c(i)}
      <div class="skillsBox">
        ${t.map(e=>`
          <div>
            ${u(e.name)}
            <ul>
              ${e.skillName.map(o=>`${l(o,!0)}`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </section>
  `;return s({template:n,style:j})},C=[{name:"Languajes",skillName:["html","css","javascript(ES6+)","Node","Dart"]},{name:"Frameworks",skillName:["vuejs","strapi","Flutter"]},{name:"Libraries",skillName:["chartjs","Puppeteer","gsap","bootstrap"]},{name:"Tools",skillName:["bash","firebase","npm","git & github","debugging","devtools","Gulp & Grunt","webpack"]},{name:"Others",skillName:["coventional commits","responsive design","bem","web components","atomic design"]}],_=[{name:"Kiritek",url:"https://kiritek.com/",date:"jun 2022 - Present",role:"Mobile developer"},{name:"G4A",url:"https://www.g4a.mx/",date:"Feb 2021 - Jun 2022",role:"Front-end developer"}],L=[{name:"Myfrac",description:"Mobile app that provides security and comfort, made with flutter.",img:"public/assets/centro_urbano.png",url:"https://myfrac.com/"},{name:"Myfrac vigilantes",description:"Mobile app alogside with myfrac provide security and allow vigilants give access to non residents, made with flutter.",img:"public/assets/centro_urbano.png",url:"https://myfrac.com/"},{name:"Centro Urbano",description:"Full redesign of website, improving UI and UX, performing SEO.",img:"public/assets/centro_urbano.png",url:"https://centrourbano.com/"},{name:"quadratin",description:"Creation of components",img:"public/assets/quadratin.png",url:"https://www.quadratin.com.mx/"},{name:"Linde",description:"Creation of components",img:"public/assets/linde.png",url:"https://www.linde.mx/"}],D=[{name:"FB automate",description:"App to consume services from node-scraper",url:"https://github.com/echb/scraping-server-node",techs:["git","ionic","async / await","fetch","vue","Bootstrap","js","html","css","webpack"]},{name:"Scraping Server Node",description:"Full backend api service app with roles and permissions, scraping and robot post include to automate facebook marketplace posts",url:"https://github.com/echb/scraping-server-node",techs:["node","async / await","Axios","fastify","robot-post","Linode"]},{name:"Robot Post",description:"Npm package to automate facebook marketplace posts",url:"https://github.com/echb/robot-post",techs:["js","async / await","Puppeter","jimp"]},{name:"lego-web-components",description:"Crud app made making use of strapi as backend and vue as frontend",url:"https://www.npmjs.com/package/lego-web-components",techs:["vue","strapi","async / await","Axios","js","css","html"]},{name:"Music Player",description:"app created on my free time to use mostly js, and web audio native api.",img:"public/assets/music_make.gif",url:"https://echb.github.io/music_player/",techs:["js","html","css","local api","fech","vs code"]}],P=`
  <style>
    .experience {
      display: flex;
    }

    @media screen and (max-width: 768px) {
      .experience {
        flex-direction: column;
      }
    }

    .experience p {
      margin: 0;
    }

    .jobs {
      width: 100%;
      word-break: break-all;
      margin-bottom: 100px;
    }

    @media screen and (max-width: 768px) {
      .jobs {
        padding-left: 50px;
      }
    }

    .company {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    .company a {
      text-decoration: none;
      color: inherit;
    }

    .company h4 {
      margin: 0;
      font-weight: 900;
    }

    .company span {
      font-weight: 300;
    }

    .resume {
      font-size: 18px;
      font-weight: 700;
      color: inherit;
      text-decoration: none;
    }
    </style>
`,S=({sectionTitle:i="",items:t=[]}={})=>{const n=`
    	<section class="experience">
          ${c(i)}
          <div class="jobs">
            ${t.map(e=>`
                <div class="company">
                  <div>
                    <a href="${e.url}" target="blank">
                      ${u(e.name,!0)}
                    </a>
                    <span>${e.date}</span>
                  </div>
                  ${l(e.role,!0)}
                </div>
              `).join("")}
            <a class="resume" href="CV_English.docx.pdf" target="blank">View My Resume👉
            </a>
          </div>
      </section>
  `;return s({template:n,style:P})},z=`
  <style>
    .projects {
      display: flex;
    }
    @media screen and (max-width: 768px) {
      .projects {
        flex-direction: column;
      }
    }
    .job {
      display: flex;
      word-break: break-word;
      margin-bottom: 100px;
    }
    .job div {
      overflow: hidden;
      border-radius: 5px;
    }
    @media screen and (max-width: 768px) {
      .job {
        flex-direction: column;
        align-items: center;
        margin-bottom: 70px;
        padding-left: 50px;
      }
    }
    .image {
      display: block;
      max-width: 100%;
      transition: transform 0.5s ease-out;
    }
    .image:hover {
      transform: scale(1.1);
    }
    .projec_description {
      margin: 0;
      max-width: 170px;
      width: 100%;
      padding-left: 20px;
    }
    @media screen and (max-width: 768px) {
      .projec_description {
        padding-left: 0;
        max-width: initial;
      }
    }
    .projec_description a {
      display: inline-block;
      color: inherit;
      text-decoration: none;
      margin: 0;
      font-weight: 600;
      font-size: 19px;
      text-transform: capitalize;
    }
    @media screen and (max-width: 768px) {
      .projec_description a {
        padding-top: 25px;
      }
    }
    .projec_description p {
      margin: 0;
    }
    @media screen and (max-width: 768px) {
      .projec_description p {
        padding-top: 10px;
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
`,N=({sectionTitle:i="",items:t=[]}={})=>{const n=`
    	<section class="projects">
        ${c(i)}
        <div>
          ${t.map(e=>`
          <div class="job">
              <div>
                <a href="${e.url}" target="blank">
                  <img class="image" src="${e.img}" alt="${e.name}" />
                </a>
              </div>
              <figcaption class="projec_description">
                <a href="${e.url}" target="blank">
                  <span> ${e.name} </span>
                </a>
                ${l(e.description)}
              </figcaption>
            </div>
            `).join("")}
        </div>
    </section>
  `;return s({template:n,style:z})},M=`
  <style>
    .projects {
      display: flex;
    }
    @media screen and (max-width: 768px) {
      .projects {
        flex-direction: column;
      }
    }
    .job {
      display: flex;
      word-break: break-word;
      margin-bottom: 100px;
    }
    .job div {
      overflow: hidden;
      border-radius: 5px;
    }
    @media screen and (max-width: 768px) {
      .job {
        flex-direction: column;
        align-items: center;
        margin-bottom: 70px;
        padding-left: 50px;
      }
    }
    .image {
      display: block;
      max-width: 100%;
      transition: transform 0.5s ease-out;
    }
    .image:hover {
      transform: scale(1.1);
    }
    .projec_description {
      margin: 0;
      max-width: 170px;
      width: 100%;
      padding-left: 20px;
    }
    @media screen and (max-width: 768px) {
      .projec_description {
        padding-left: 0;
        max-width: initial;
      }
    }
    .projec_description a {
      display: inline-block;
      color: inherit;
      text-decoration: none;
      margin: 0;
      font-weight: 600;
      font-size: 19px;
      text-transform: capitalize;
    }
    @media screen and (max-width: 768px) {
      .projec_description a {
        padding-top: 25px;
      }
    }
    .projec_description p {
      margin: 0;
    }
    @media screen and (max-width: 768px) {
      .projec_description p {
        padding-top: 10px;
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
`,B=({sectionTitle:i="",items:t=[]}={})=>{const n=`
    	<section class="projects">
        ${c(i)}
        <div>
          ${t.map(e=>`
          <div class="job">
              <div>
                <a href="${e.url}" target="blank">
                  <img class="image" src="${e.img}" alt="${e.name}" />
                </a>
              </div>
              <figcaption class="projec_description">
                <a href="${e.url}" target="blank">
                  <span> ${e.name} </span>
                </a>
                ${l(e.description)}
              </figcaption>
            </div>
            `).join("")}
        </div>
    </section>
  `;return s({template:n,style:M})},h=m({querySelector:"header"}),r=m({querySelector:"main"}),T=i=>{h.appendChild(y()),h.appendChild(b),r.appendChild($({skillTitle:"skills".toUpperCase(),skills:C})),r.appendChild(S({sectionTitle:"Experience".toUpperCase(),items:_})),r.appendChild(N({sectionTitle:"Projects".toUpperCase(),items:L})),r.appendChild(B({sectionTitle:"Side Projects".toUpperCase(),items:D}))};T();
