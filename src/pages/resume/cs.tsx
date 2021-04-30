import Head from 'next/head'

import {FaCalendar, FaGithub, FaHeart, FaHome, FaLink, FaLinkedinIn, FaPhone, FaTag, FaFilePdf} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {RiWhatsappFill} from 'react-icons/ri'

import Container from '../../styles/pages/resume/cs'
import ExternalLink from '../../components/ExternalLink'

const CSResume: React.FC = () =>
{
	return (
		<Container>
			<Head>
				<title>Iago Mendes (Computer Science Resume)</title>
			</Head>

			<header>
				<div className='me'>
					<h1>
						Iago Mendes
					</h1>
					<h2>
						Front-end web developer
					</h2>
				</div>

				<ul className='info'>
					<div className='field'>
						<FaCalendar />
						<span>
							19 years old
						</span>
					</div>

					<div className='field'>
						<FaHome />
						<span>
							Brazil
						</span>
					</div>

					<div className='field'>
						<HiMail />
						<ExternalLink url='mailto:contact@iago-mendes.me' text='contact@iago-mendes.me' />
					</div>

					<div className='field'>
						<FaLinkedinIn />
						<ExternalLink url='https://www.linkedin.com/in/iago-b-mendes' text='/in/iago-b-mendes' />
					</div>

					<div className='field'>
						<FaGithub />
						<ExternalLink url='https://github.com/iago-mendes' text='iago-mendes' />
					</div>

					<div className='field'>
						<FaPhone />
						<RiWhatsappFill />
						<ExternalLink url='https://wa.me/5528984043111' text='+55 (38) 9 8404-3111' />
					</div>
				</ul>
			</header>

			<section id='education' >
				<h2>Education</h2>

				<div className='group'>
					<img src='https://oberview.oberlin.edu/media/setting/FAVICON-IMAGE' alt='Oberlin College'/>

					<div>
						<h3>Oberlin College</h3>
						<p>Class of 2024</p>
					</div>
				
					<ul>
						<li>Computer Science</li>
						<li>Physics (Astrophysics)</li>
					</ul>
				</div>
			</section>

			<section id='experiences' >
				<h2>Experiences</h2>

				{/* cruz */}
				<div className='experience' >
					<div className='header'>
						<img src='https://cruzrepresentacoes.com.br/favicon.svg' alt='Cruz Representações' />
						<h3>Cruz Representações</h3>
					</div>
					
					<div className='description'>
						<p>This is a sales representation company owned by my father, in which I have been working as a <strong>full stack developer</strong> for about a year. In this period, I have developed 3 main applications: a server, an e-commerce, and an administrative system. The company attends approximately <strong>1,500 clients</strong>.</p>

						<p>While developing the <strong>back-end</strong> the biggest challenges I had to solve were <strong>authentication</strong> of sellers and clients, <strong>e-mails</strong> using the <strong>Google API's</strong>, and <strong>PDF</strong> generation of requests.</p>

						<p>For the e-commerce, I had to create a friendly interface through which the clients could buy products. Then, I focused on delivering the best <strong>UX</strong> and <strong>UI</strong>.</p>

						<p>Finally, in the administrative system, I had to deal with different roles (sellers and administers), allowing different actions for each. Besides, I created several automatization functions to help in the daily tasks of the company, especially implementing the use of <strong>Spreadsheets</strong> for importing of exporting <strong>large</strong> amount of data.</p>
					</div>
					
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

					<div className='description'>
						<p>
							Cinephix is the application made for cinephiles. By now, I have developed the main website and the API, but I plan on creating a mobile app soon.
						</p>
					</div>

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

				{/* stem guy */}
				<div className='experience' >
					<div className='header'>
						<img src='https://api.stemguy.club/public/logo.svg' alt='STEM Guy' />
						<h3>STEM Guy</h3>
					</div>

					<div className='description'>
						<p>
							The STEM Guy club is a blog about science and technology. I have developed the main website, an admin system, the API, and more.
						</p>
					</div>

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
					
					<div className='description'>
						<p>
							Text Counter is an application that counts text. I have developed the minimalist website.
						</p>
					</div>
					
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
			</section>
		</Container>
	)
}

export default CSResume