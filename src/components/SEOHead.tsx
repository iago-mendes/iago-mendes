import Head from 'next/head'

export function SEOHead() {
	const meta = {
		title: 'Iago Mendes',
		description: 'Software developer & Oberlin student',
		image: 'https://iago-mendes.me/me.png',
		url: 'https://iago-mendes.me'
	}

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name="title" content={meta.title} />
			<meta name="description" content={meta.description} />

			<meta property="og:type" content="article" />
			<meta property="og:url" content={meta.url} />
			<meta property="og:title" content={meta.title} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:image" content={meta.image} />
			<meta property="og:site_name" content="Iago Mendes" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={meta.url} />
			<meta property="twitter:title" content={meta.title} />
			<meta property="twitter:description" content={meta.description} />
			<meta property="twitter:image" content={meta.image} />
		</Head>
	)
}
