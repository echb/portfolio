const baseImgUrl = 'https://raw.githubusercontent.com/echb/aaa/master/docs/assets/'

export const skills = [
	{
		name: 'Languajes',
		skillName: ['html', 'css', 'javascript(ES6+)', 'Node', 'Dart'
		]
	},
	{
		name: 'Frameworks',
		skillName: ['vuejs', 'strapi', 'Flutter'
		]
	},
	{
		name: 'Libraries',
		skillName: ['chartjs', 'Puppeteer', 'gsap', 'bootstrap'
		]
	},
	{
		name: 'Tools',
		skillName: [
			'bash', 'firebase', 'npm', 'git & github', 'debugging', 'devtools',
			'Gulp & Grunt', 'webpack'
		]
	},
	{
		name: 'Others',
		skillName: [
			'coventional commits',
			'responsive design',
			'bem',
			'web components',
			'atomic design'
		]
	}
]

export const jobs = [
	{
		name: 'Kiritek',
		url: 'https://kiritek.com/',
		date: 'Jan 2023 - Present',
		role: 'Front End Developer',
	},
	{
		name: 'Kiritek',
		url: 'https://kiritek.com/',
		date: 'jun 2022 - Present',
		role: 'Mobile Developer',
	},
	{
		name: 'G4A',
		url: 'https://www.g4a.mx/',
		date: 'Feb 2021 - Jun 2022',
		role: 'Front End Developer',
	},
]

export const projects = [
	{
		name: 'Skolable',
		description: 'Mobile app that provides security and comfort, made with flutter.',
		img:
			`${baseImgUrl}skolable.png`,
		url: 'https://skolable.com/',
	},
	{
		name: 'Myfrac',
		description: 'Mobile app that provides security and comfort, made with flutter.',
		img:
			`${baseImgUrl}centro_urbano.png`,
		url: 'https://myfrac.com/',
	},
	{
		name: 'Myfrac vigilantes',
		description: 'Mobile app alogside with myfrac provide security and allow vigilants give access to non residents, made with flutter.',
		img:
			`${baseImgUrl}centro_urbano.png`,
		url: 'https://myfrac.com/',
	},
	{
		name: 'Centro Urbano',
		description: 'Full redesign of website, improving UI and UX, performing SEO.',
		img:
			`${baseImgUrl}centro_urbano.png`,
		url: 'https://centrourbano.com/'
	},
	{
		name: 'quadratin',
		description: 'Creation of components',
		img:
			`${baseImgUrl}quadratin.png`,
		url: 'https://www.quadratin.com.mx/'
	},
	{
		name: 'Linde',
		description: 'Creation of components',
		img:
			`${baseImgUrl}linde.png`,
		url: 'https://www.linde.mx/'
	}
]


export const sideProjects = [
	{
		name: 'FB automate',
		description: 'App to consume services from node-scraper',
		// img:,
		url: 'https://github.com/echb/scraping-server-node',
		techs: ['git', 'ionic', 'async / await', 'fetch', 'vue', 'Bootstrap', 'js', 'html', 'css', 'webpack']
	},
	{
		name: 'Scraping Server Node',
		description: 'Full backend api service app with roles and permissions, scraping and robot post include to automate facebook marketplace posts',
		// img:,
		url: 'https://github.com/echb/scraping-server-node',
		techs: ['node', 'async / await', 'Axios', 'fastify', 'robot-post', 'Linode']
	},
	{
		name: 'Robot Post',
		description: 'Npm package to automate facebook marketplace posts',
		// img:,
		url: 'https://github.com/echb/robot-post',
		techs: ['js', 'async / await', 'Puppeter', 'jimp']
	},
	{
		name: 'lego-web-components',
		description: 'Crud app made making use of strapi as backend and vue as frontend',
		// img:,
		url: 'https://www.npmjs.com/package/lego-web-components',
		techs: ['vue', 'strapi', 'async / await', 'Axios', 'js', 'css', 'html']
	},
	{
		name: 'Music Player',
		description: 'app created on my free time to use mostly js, and web audio native api.',
		img: `${baseImgUrl}music_make.gif`,
		url: 'https://echb.github.io/music_player/',
		techs: ['js', 'html', 'css', 'local api', 'fech', 'vs code']
	},
	// {
	//   name: 'Strapi app',
	//   description: 'Crud app made making use of strapi as backend and vue as frontend',
	//   // img:,
	//   url: 'https://github.com/echb/simple_strapi_app',
	//   techs: ['vue', 'strapi', 'async / await', 'Axios', 'js', 'css', 'html']
	// },
	// {
	//   name: 'Air Quality',
	//   description: 'App made with waqi api, also as search api to display data of air quality.',
	//   img: require("@/assets/air_quality.png"),
	//   url: 'https://echb.github.io/air_quality/',
	//   techs: ['js', 'html', 'css', 'waqi api', 'fech', 'vs code']
	// },
	// {
	//   name: 'Adventure Text Game',
	//   description: "Simple game based on decisions, also displays where you are in the path.",
	//   img: require("@/assets/adventure_game.png"),
	//   url: 'https://echb.github.io/adventure_text_game/',
	//   techs: ['js', 'html', 'css', 'local api', 'fech', 'vs code']
	// },
	// {
	//   name: 'Linkedin Clone',
	//   description: 'Still working on it, using static json, and async/await.',
	//   img: require("@/assets/linkedin_clone.png"),
	//   url: 'https://echb.github.io/linkedin_clone/',
	//   techs: ['vuejs', 'html', 'css', 'vs code']
	// },
	// {
	//   name: 'Turtles Race',
	//   description: 'Simple game making use of css transitions, js timers, so just a really small game.',
	//   img: require("@/assets/turtle_game.png"),
	//   url: 'https://echb.github.io/turtles_race/',
	//   techs: ['javaScript', 'html', 'css', 'vs code']
	// },
	// {
	//   name: 'Quiz Game',
	//   description: 'Simple quiz game',
	//   img: require("@/assets/quiz_game.png"),
	//   url: 'https://echb.github.io/quiz_game/',
	//   techs: ['javaScript', 'html', 'css', 'vs code']
	// },
	// {
	//   name: 'specialized page',
	//   description: 'Simple really simple imitation of the website with the same name',
	//   img: require("@/assets/specialized.png"),
	//   url: 'https://specialized-8670c.web.app/',
	//   techs: ['javaScript', 'html', 'css', 'firebase']
	// },
	// {
	//   name: 'Burguers page',
	//   description: 'Tring to imitate a website',
	//   img: require("@/assets/burguer.png"),
	//   url: 'https://backyard-burguer.web.app/',
	//   techs: ['javaScript', 'html', 'css', 'firebase']
	// },
]
