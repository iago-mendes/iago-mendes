export type Portfolio = Array<{
	title: string
	subtitle: string
	startDate: string
	endDate: string
	links?: Array<{
		url: string
		displayUrl: string
	}>
	image: string
	description: string
	descriptionItems?: string[]
}>

export const portfolio: Portfolio = [
	{
		title: 'Star View',
		subtitle: 'Stargazing software',
		startDate: '2021-06',
		endDate: 'present',
		links: [
			{
				url: 'https://starview.one/google-play',
				displayUrl: 'Google Play'
			},
			{url: 'https://starview.one', displayUrl: 'starview.one'}
		],
		image: '/images/portfolio/star-view.png',
		description:
			'This is a software that informs users the best location, date, and time to stargaze, in which I have:',
		descriptionItems: [
			'Made the software modern and responsive by designing a new visual for Android, IOS, and Web versions.',
			'Increased platform distribution by recreating old version (made with Java) with React Native and Expo.'
		]
	},
	// {
	// 	title: 'Cinephix',
	// 	subtitle: 'Software for cinephiles',
	// 	startDate: '2021-01',
	// 	endDate: 'present',
	// 	links: [
	// 		{url: 'https://cinephix.com', displayUrl: 'cinephix.com'},
	// 		{
	// 			url: 'https://github.com/iago-mendes/cinephix',
	// 			displayUrl: 'iago-mendes/cinephix'
	// 		}
	// 	],
	// 	image: 'https://cinephix.com/thumbnail.png',
	// 	description:
	// 		'This is a place where people passionate about movies and TV shows (cinephiles) can pursue their interest, in which I have:',
	// 	descriptionItems: [
	// 		"Built an API with Node.js and MongoDB that collects data from TMDb's API, caches information with Redis, and more.",
	// 		'Developed and designed the entire Progressive Web Application using React.js and Next.js.'
	// 	]
	// },
	{
		title: 'Cruz Representações',
		subtitle: 'Sales representation company',
		startDate: '2020-08',
		endDate: 'present',
		links: [
			{
				url: 'https://cruzrepresentacoes.com.br',
				displayUrl: 'cruzrepresentacoes.com.br'
			},
			{
				url: 'https://github.com/iago-mendes/cruz',
				displayUrl: 'iago-mendes/cruz'
			}
		],
		image: 'https://api.cruzrepresentacoes.com.br/public/images/thumbnail.png',
		description:
			'This is a local sales representation company, which has approximately 1,500 clients, in which I have:',
		descriptionItems: [
			'Reduced costs of the company by developing a Server, an E-Commerce, and an Administer System specific to the company.',
			'Implemented features like automatic e-mails, PDF generation, spreadsheet for large data, authentication with roles, etc..',
			'Developed PWAs with offline support using web development technologies like Next.js, React.js, and IndexedDB.'
		]
	},
	// {
	// 	title: 'STEM Guy',
	// 	subtitle: 'Blog about STEM',
	// 	startDate: '2020-11',
	// 	endDate: 'present',
	// 	links: [
	// 		{
	// 			url: 'https://stemguy.iago-mendes.me',
	// 			displayUrl: 'stemguy.iago-mendes.me'
	// 		},
	// 		{
	// 			url: 'https://github.com/iago-mendes/stemguy',
	// 			displayUrl: 'iago-mendes/stemguy'
	// 		}
	// 	],
	// 	image: 'https://stemguy.iago-mendes.me/thumbnail.png',
	// 	description:
	// 		'This is a blog where you can read articles about science and technology, in which I have:',
	// 	descriptionItems: [
	// 		'Built an API with Node.js and MongoDB, and the front-end apps (blog and Administer System) with React.js and Next.js.'
	// 	]
	// },
	{
		title: 'Text Counter',
		subtitle: 'Software that counts text',
		startDate: '2020-08',
		endDate: '2021-01',
		links: [
			{
				url: 'https://textcounter.iago-mendes.me',
				displayUrl: 'textcounter.iago-mendes.me'
			},
			{
				url: 'https://github.com/iago-mendes/textcounter',
				displayUrl: 'iago-mendes/textcounter'
			}
		],
		image: 'https://textcounter.iago-mendes.me/thumbnail.png',
		description:
			'This is an application that counts text, which was my first project in production.'
	},
	{
		title: 'Express Bot',
		subtitle: '2nd place in VTEX track of Brazilian Hackathon',
		startDate: '2021-04',
		endDate: '2021-04',
		links: [
			{
				url: 'https://github.com/iago-mendes/express-bot',
				displayUrl: 'iago-mendes/express-bot'
			}
		],
		image: '/images/portfolio/express-bot.jpeg',
		description:
			"From a total of 51 teams, my group won second place. With me as the main developer, we built an omnichannel integration to VTEX's platform. Using back-end technologies, it was an online bot with personalized messages, smart search, and checkout."
	},
	{
		title: 'Podcastr',
		subtitle: 'Podcast streaming website',
		startDate: '2021-04',
		endDate: '2021-04',
		links: [
			{
				url: 'https://podcastr.iago-mendes.me',
				displayUrl: 'podcastr.iago-mendes.me'
			},
			{
				url: 'https://github.com/iago-mendes/nlw5-podcastr',
				displayUrl: 'iago-mendes/nlw5-podcastr'
			}
		],
		image: 'https://podcastr.iago-mendes.me/thumbnail.png',
		description:
			'This is a podcast streaming website developed during the 5th edition of the Next Level Week, a coding event organized by Rocketseat.'
	},
	{
		title: 'Letmeask',
		subtitle: 'Live Q&A platform',
		startDate: '2021-06',
		endDate: '2021-06',
		links: [
			{
				url: 'https://letmeask.iago-mendes.me',
				displayUrl: 'letmeask.iago-mendes.me'
			},
			{
				url: 'https://github.com/iago-mendes/nlw6-letmeask',
				displayUrl: 'iago-mendes/nlw6-letmeask'
			}
		],
		image: 'https://letmeask.iago-mendes.me/screenshots/home.png',
		description:
			'This is a live Q&A platform, which was developed during the 6th edition of the Next Level Week, referred to as NLW Together.'
	}
]
