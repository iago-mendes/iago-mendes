import Head from 'next/head'

type Props = {
	title: string
	url: string
	description?: string
	image?: string
}

export function SEOHead({title, url, description, image}: Props) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title} />
			{description && <meta name="description" content={description} />}

			<meta property="og:type" content="article" />
			<meta property="og:title" content={title} />
			<meta property="og:url" content={url} />
			{description && <meta property="og:description" content={description} />}
			{image && <meta property="og:image" content={image} />}
			<meta property="og:site_name" content="Iago Mendes" />

			<meta property="twitter:title" content={title} />
			<meta property="twitter:url" content={url} />
			{description && (
				<meta property="twitter:description" content={description} />
			)}
			{image && (
				<>
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:image" content={image} />
				</>
			)}
		</Head>
	)
}
