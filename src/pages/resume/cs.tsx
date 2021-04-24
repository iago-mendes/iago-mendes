import Head from 'next/head'
import Image from 'next/image'

import {FaCalendar, FaGithub, FaHeart, FaHome, FaLink, FaLinkedinIn, FaPhone, FaTag} from 'react-icons/fa'
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
					<div className='img'>
						<Image src='/me.png' width={1000} height={1000} layout='responsive' />
					</div>
					<h1>
						Iago Mendes
					</h1>
				</div>

				<div className='info'>
					<h2>
						Personal info
					</h2>

					<div className='field'>
						<FaTag />
						<span>
							Iago Braz Mendes
						</span>
					</div>

					<div className='field'>
						<FaCalendar />
						<span>
							December 17th, 2001
						</span>
					</div>

					<div className='field'>
						<FaHome />
						<span>
							Montes Claros, MG, Brazil
						</span>
					</div>

					<div className='field'>
						<FaHeart />
						<span>
							Software development
						</span>
					</div>
				</div>

				<div className='info'>
					<h2>
						Contact info
					</h2>

					<div className='field'>
						<HiMail />
						<ul>
							<li>
								<ExternalLink url='mailto:contact@iago-mendes.me' text='contact@iago-mendes.me' />
							</li>
							<li>
								<ExternalLink url='mailto:Iago.Braz.Mendes@oberlin.edu' text='Iago.Braz.Mendes@oberlin.edu' />
							</li>
						</ul>
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
				</div>
			</header>

			{/* technologies */}
			<section>
				<h2>Technologies</h2>

				<div className='verticalGroups'>
					<div className='group'>
						<h3>Development stack</h3>
						<ul>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' alt='JavaScript' />
								<span>JavaScript</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt='React.js' />
								<span>React.js</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/next-js.svg' alt='Next.js' />
								<span>Next.js</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' alt='Node.js' />
								<span>Node.js</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' alt='MongoDB' />
								<span>MongoDB</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/typescript.svg' alt='TypeScript' />
								<span>TypeScript</span>
							</li>
							<li>
								<img src='https://camo.githubusercontent.com/521b3e7f3fab722f33b7724d215934986ad0bababee5995f3aaab596a7ccf173/68747470733a2f2f7374796c65642d636f6d706f6e656e74732e636f6d2f66617669636f6e2e706e67' alt='Styled Components' />
								<span>Styled Components</span>
							</li>
						</ul>
					</div>
					<div className='group'>
						<h3>Advanced experience</h3>
						<ul>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/html5.svg' alt='HTML' />
								<span>HTML</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/css-5.svg' alt='CSS' />
								<span>CSS</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/git-icon.svg' alt='Git' />
								<span>Git</span>
							</li>
							<li>
								<img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/latex/latex.png' alt='LaTeX' />
								<span>LaTeX</span>
							</li>
							<li>
								<img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png' alt='Terminal' />
								<span>Terminal (bash & zsh)</span>
							</li>
						</ul>
					</div>
					<div className='group'>
						<h3>Basic experience</h3>
						<ul>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/java-14.svg' alt='Java' />
								<span>Java</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/c.svg' alt='C++' />
								<span>C++</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/python-5.svg' alt='Python' />
								<span>Python</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt='React Native' />
								<span>React Native</span>
							</li>
							<li>
								<img src='https://cdn.worldvectorlogo.com/logos/postgresql.svg' alt='PostgreSQL' />
								<span>PostgreSQL</span>
							</li>
							<li>
								<img src='https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png' alt='MATLAB' />
								<span>MATLAB</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* projects */}
			<section>
				<h2>Projects</h2>

				<div className='verticalGroups'>
					<div className='group'>
						<div className='projectHeader'>
							<img src='https://cinephix.com/favicon.svg' alt='Cinephix' />
							<h3>Cinephix</h3>
						</div>
						<p>
							Cinephix is the application made for cinephiles. By now, I have developed the main website and the API, but I plan on creating a mobile app soon.
						</p>
						<ul>
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
					<div className='group'>
						<div className='projectHeader'>
							<img src='https://api.stemguy.club/public/logo.svg' alt='STEM Guy' />
							<h3>STEM Guy</h3>
						</div>
						<p>
							The STEM Guy club is a blog about science and technology. I have developed the main website, an admin system, the API, and more.
						</p>
						<ul>
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
					<div className='group'>
						<div className='projectHeader'>
							<img src='https://textcounter.tools/faviconDark.svg' alt='Text Counter' />
							<h3>Text Counter</h3>
						</div>
						<p>
							Text Counter is an application that counts text. I have developed the minimalist website.
						</p>
						<ul>
							<li>
								<FaLink />
								<ExternalLink url='https://textcounter.tools' text='textcounter.tools' />
							</li>
							<li>
								<FaGithub />
								<ExternalLink
									url='https://github.com/iago-mendes/textcounter'
									text='iago-mendes/textcounter'
									style={{fontSize: '1.25rem'}}
								/>
							</li>
						</ul>
					</div>
					<div className='group'>
						<div className='projectHeader'>
							<img src='https://cruzrepresentacoes.com.br/favicon.svg' alt='Cruz Representações' />
							<h3 style={{fontSize: '1.5rem'}} >Cruz Representações</h3>
						</div>
						<ul>
							<li>
								<FaLink />
								<ExternalLink
									url='https://cruzrepresentacoes.com.br'
									text='cruzrepresentacoes.com.br'
									style={{fontSize: '1.25rem'}}
								/>
							</li>
							<li>
								<FaGithub />
								<ExternalLink url='https://github.com/iago-mendes/cruz' text='iago-mendes/cruz' />
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* events */}
			<section>
				<h2>Events</h2>
			</section>

			{/* education */}
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
		</Container>
	)
}

export default CSResume