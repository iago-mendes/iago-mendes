import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Iago Mendes</title>
			</Head>

			<h1>Hi there!</h1>
			<h2>
				This is my personal website, but I haven't had time to code it yet.
			</h2>
			<h2>
				If you want to know more about me, I invite you to take a look at my{' '}
				<a href="https://github.com/iago-mendes">GitHub</a> and{' '}
				<a href="https://www.linkedin.com/in/iago-mendes-21a2361a2/">
					LinkedIn
				</a>{' '}
				accounts
			</h2>
		</div>
	)
}
