module.exports = {
	esModule: true,
	images:
	{
		domains: [
			'cinephix.com',
			'api.cruzrepresentacoes.com.br',
			'stemguy.club',
			'textcounter.iago-mendes.me',
			'podcastr.iago-mendes.me',
			'letmeask.iago-mendes.me',
			'stemguy.iago-mendes.me'
		]
	},
	async redirects() {
		return [
			{
				source: '/schedule',
				destination: 'https://calendar.google.com/calendar/selfsched?sstoken=UUhidU9tZ0lmOUVyfGRlZmF1bHR8OGE1ZTFkM2Y2YTdlNzk5NDkwNjVhOTVlOWU3MDk4YjY',
				permanent: true
			},
			{
				source: '/barnard',
				destination: 'https://iago-mendes.notion.site/Barnard-Roots-in-STEM-Community-bf01c0e0e00a42d9a86a43613370f920',
				permanent: true
			}
		]
	}
}
