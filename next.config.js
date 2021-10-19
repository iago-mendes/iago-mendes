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
			'letmeask.iago-mendes.me'
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
				source: '/burton',
				destination: 'https://puffy-juice-3e5.notion.site/Burton-Hall-Community-a7b80c3d4026493ab22574e75e729c03',
				permanent: true
			}
		]
	}
}
