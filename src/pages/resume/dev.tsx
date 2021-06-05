import Head from 'next/head'
import { FaGithub, FaLink } from 'react-icons/fa'

import Container from '../../styles/pages/resume/global'
import ExternalLink from '../../components/ExternalLink'
import {
	CSS,
	Git,
	HTML,
	JavaScript,
	Linux,
	MongoDB,
	Next,
	Node,
	React,
	StyledComponents,
	Terminal,
	TypeScript
} from '../../utils/techs'
import ResumeHeader from '../../components/ResumeHeader'

const DevResume: React.FC = () =>
{
	return (
		<Container>
			<Head>
				<title>Iago Mendes (Development Resume)</title>
			</Head>

			<ResumeHeader
				title='Front-end web developer'
			/>

			<section id='technologies'>
				<h2>Technologies</h2>

				<ul>
					<li>
						<JavaScript />
						<span>JavaScript</span>
					</li>
					<li>
						<TypeScript />
						<span>TypeScript</span>
					</li>
					<li>
						<React />
						<span>React.js</span>
					</li>
					<li>
						<Next />
						<span>Next.js</span>
					</li>
					<li>
						<Node />
						<span>Node.js</span>
					</li>
					<li>
						<MongoDB />
						<span>MongoDB</span>
					</li>
					<li>
						<HTML />
						<span>HTML</span>
					</li>
					<li>
						<CSS />
						<span>CSS</span>
					</li>
					<li>
						<StyledComponents />
						<span>Styled Comp.</span>
					</li>
					<li>
						<Git />
						<span>Git</span>
					</li>
					<li>
						<Terminal />
						<span>Terminal</span>
					</li>
					<li>
						<Linux />
						<span>Linux</span>
					</li>
				</ul>
			</section>

			<section className='experiences' >
				<h2>Experiences</h2>

				{/* cruz */}
				<div className='experience' >
					<div className='header'>
						<img src='https://cruzrepresentacoes.com.br/favicon.svg' alt='Cruz Representações' />
						<h3>Cruz Representações</h3>
					</div>
					
					<ul className='description'>
						<li>Sales representation company</li>
						<li>I have been working as a <strong>full stack developer</strong> for about a year.</li>
						<li>A server, an e-commerce, and an admin system.</li>
						<li>Approximately <strong>1,500 clients</strong>.</li>
						<li><strong>Authentication</strong> of sellers and clients with different accesses.</li>
						<li>Automatic <strong>e-mails</strong> using <strong>Google API's</strong>.</li>
						<li><strong>PDF</strong> generation of requests.</li>
						<li><strong>Spreadsheets</strong> for importing or exporting <strong>large</strong> amounts of data.</li>
						<li><strong>PWA</strong> with <strong>offline</strong> functions and API <strong>synchronization</strong>.</li>
					</ul>
					
					<ul className='links' >
						<li>
							<FaLink />
							<ExternalLink url='https://cruzrepresentacoes.com.br' text='cruzrepresentacoes.com.br' />
						</li>
						<li>
							<FaGithub />
							<ExternalLink url='https://github.com/iago-mendes/cruz' text='iago-mendes/cruz' />
						</li>
					</ul>
				</div>

				{/* cinephix */}
				<div className='experience'>
					<div className='header'>
						<img src='https://cinephix.com/favicon.svg' alt='Cinephix' />
						<h3>Cinephix</h3>
					</div>

					<ul className='description'>
						<li>Application made for cinephiles.</li>
						<li>A website, and an API.</li>
						<li>Uses <strong>TMDb's API</strong> as the source for media data.</li>
						<li>Uses <strong>caching</strong> for media data using <strong>Redis</strong>.</li>
						<li>Groups for friends to share predictions about geek events.</li>
						<li>Search, discover, save, and organize movies and TV shows.</li>
					</ul>

					<ul className='links' >
						<li>
							<FaLink />
							<ExternalLink url='https://cinephix.com' text='cinephix.com' />
						</li>
						<li>
							<FaGithub />
							<ExternalLink url='https://github.com/iago-mendes/cinephix' text='iago-mendes/cinephix' />
						</li>
					</ul>
				</div>

				{/* express bot */}
				<div className='experience'>
					<div className='header'>
						<img src='https://raw.githubusercontent.com/iago-mendes/express-bot/main/public/logo.svg' alt='Express Bot' />
						<h3>Express Bot</h3>
					</div>

					<ul className='description'>
						<li>Online seller that guides clients in buying products.</li>
						<li>Solution to challenge created by <strong>VTEX</strong> in the <strong>hackathon</strong> BRASA Hacks.</li>
						<li>I worked in a <strong>group</strong> of 5 participants to create this in only <strong>4 days</strong>.</li>
						<li>From a total of 51 teams, my team won <strong>second place</strong>.</li>
						<li>Uses the <strong>Telegram Bot API</strong>.</li>
						<li>Personalized messages, smart search, and checkout without redirection.</li>
					</ul>

					<ul className='links' >
						<li>
							<FaLink />
							<ExternalLink url='https://t.me/express_a_bot' text='t.me/express_a_bot' />
						</li>
						<li>
							<FaGithub />
							<ExternalLink url='https://github.com/iago-mendes/express-bot' text='iago-mendes/express-bot' />
						</li>
					</ul>
				</div>

				{/* stem guy */}
				<div className='experience' >
					<div className='header'>
						<img src='https://api.stemguy.club/public/logo.svg' alt='STEM Guy' />
						<h3>STEM Guy</h3>
					</div>

					<ul className='description'>
						<li>This is a blog about science and technology.</li>
						<li>A server, a blog website, and an admin system.</li>
						<li>Articles written in <strong>Markdown</strong>.</li>
						<li><strong>OAuth 2.0</strong> authentication with <strong>Auth0</strong>.</li>
						<li>Scheduling of posts.</li>
						<li>Search and pagination.</li>
					</ul>

					<ul className='links' >
						<li>
							<FaLink />
							<ExternalLink url='https://stemguy.club' text='stemguy.club' />
						</li>
						<li>
							<FaGithub />
							<ExternalLink url='https://github.com/iago-mendes/stemguy' text='iago-mendes/stemguy' />
						</li>
					</ul>
				</div>

				{/* text counter */}
				<div className='experience' >
					<div className='header'>
						<img src='https://textcounter.tools/faviconDark.svg' alt='Text Counter' />
						<h3>Text Counter</h3>
					</div>

					<ul className='description'>
						<li>This is an application that counts text.</li>
						<li><strong>Theme switcher</strong> (light or dark).</li>
						<li>Text show options and safe content in <strong>local storage</strong>.</li>
					</ul>
					
					<ul className='links' >
						<li>
							<FaLink />
							<ExternalLink url='https://textcounter.tools' text='textcounter.tools' />
						</li>
						<li>
							<FaGithub />
							<ExternalLink url='https://github.com/iago-mendes/textcounter' text='iago-mendes/textcounter' />
						</li>
					</ul>
				</div>

				{/* astronomic week */}
				<div className='experience' >
					<div className='header'>
						<img src='https://ceamontes-semana-astronomica-iago-mendes.vercel.app/favicon.svg' alt='2nd Astronomic Week' />
						<h3>2nd Astronomic Week</h3>
					</div>

					<ul className='description'>
						<li>This is an astronomic event website for subscription.</li>
						<li>Step-by-step <strong>e-commerce</strong> experience.</li>
						<li>Uses <strong>Wide Pay</strong> as a <strong>payment gateway</strong> and stores data in <strong>MongoDB Atlas</strong>.</li>
					</ul>
					
					<ul className='links' >
						<li>
							<FaLink />
							<ExternalLink url='https://ceamontes-semana-astronomica-iago-mendes.vercel.app/' text='ceamontes-semana-astronomica-iago-mendes.vercel.app' />
						</li>
						<li>
							<FaGithub />
							<ExternalLink url='https://github.com/ceamontes/semana-astronomica' text='ceamontes/semana-astronomica' />
						</li>
					</ul>
				</div>
			</section>

			<section id='education' >
				<h2>Education</h2>

				<div className='group'>
					<div className='college'>
						<img src='https://oberview.oberlin.edu/media/setting/FAVICON-IMAGE' alt='Oberlin College'/>
						<div>
							<h3>Oberlin College</h3>
							<p>Class of 2024</p>
						</div>
					</div>
				
					<ul>
						<li>Computer Science</li>
						<li>Physics (Astrophysics)</li>
					</ul>

					<ul>
						<li>GPA: 3.90</li>
					</ul>
				</div>
			</section>
		</Container>
	)
}

export default DevResume