import Head from 'next/head'
import Image from 'next/image'

import {FaCalendar, FaGithub, FaHome, FaLinkedinIn, FaPhone, FaTag, FaWhatsapp} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {RiWhatsappFill} from 'react-icons/ri'

import Container from '../../styles/pages/resume/cs'

const CSResume: React.FC = () =>
{
	return (
		<Container>
			<Head>
				<title>Iago Mendes | Computer Science Resume</title>
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
				</div>

				<div className='info'>
					<h2>
						Contact info
					</h2>

					<div className='field'>
						<HiMail />
						<ul>
							<li>
								<a href='mailto:contact@iago-mendes.me'>contact@iago-mendes.me</a>
							</li>
							<li>
								<a href='mailto:Iago.Braz.Mendes@oberlin.edu'>Iago.Braz.Mendes@oberlin.edu</a>
							</li>
						</ul>
					</div>

					<div className='field'>
						<FaLinkedinIn />
						<a href='https://www.linkedin.com/in/iago-mendes-21a2361a2/'>
							Iago Mendes
						</a>
					</div>

					<div className='field'>
						<FaGithub />
						<a href='https://github.com/iago-mendes'>
							iago-mendes
						</a>
					</div>

					<div className='field'>
						<FaPhone />
						<RiWhatsappFill />
						<a href='https://wa.me/5528984043111'>
							+55 (38) 9 8404-3111
						</a>
					</div>
				</div>
			</header>
		</Container>
	)
}

export default CSResume