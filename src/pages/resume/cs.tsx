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
				
				{/* cruz */}
				<div className='experience' >
					<div className='header'>
						<img src='https://cruzrepresentacoes.com.br/favicon.svg' alt='Cruz Representações' />
						<h3>Cruz Representações</h3>
					</div>
					
					<div className='description'>
						<p></p>
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
			</section>
		</Container>
	)
}

export default CSResume