import Head from 'next/head'
import {FaGithub, FaLink} from 'react-icons/fa'

import Container from '../../styles/pages/resume/global'
import ExternalLink from '../../components/ExternalLink'
import ResumeHeader from '../../components/ResumeHeader'

const MainResume: React.FC = () => {
	return (
		<Container>
			<Head>
				<title>Iago Mendes (Resume)</title>
			</Head>

			<ResumeHeader title="Software developer & scientist" />

			<section id="education">
				<h2>Education</h2>

				<div className="group">
					<div className="college">
						<img
							src="https://oberview.oberlin.edu/media/setting/FAVICON-IMAGE"
							alt="Oberlin College"
						/>
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

			<section className="experiences">
				<h2>Coding experiences</h2>

				{/* cruz */}
				<div className="experience">
					<div className="header">
						<img
							src="https://cruzrepresentacoes.com.br/favicon.svg"
							alt="Cruz Representações"
						/>
						<h3>Cruz Representações</h3>

						<ul className="links">
							<li>
								<FaLink />
								<ExternalLink
									url="https://cruzrepresentacoes.com.br"
									text="cruzrepresentacoes.com.br"
								/>
							</li>
							<li>
								<FaGithub />
								<ExternalLink
									url="https://github.com/iago-mendes/cruz"
									text="iago-mendes/cruz"
								/>
							</li>
						</ul>
					</div>

					<ul className="description">
						<li>
							This is a sales representation company, which has about{' '}
							<strong>1,500 clients</strong>.
						</li>
						<li>
							As a <strong>full stack developer</strong>, I have developed a
							server, an e-commerce, and an admin system.
						</li>
						<li>
							<strong>Features</strong>: automatic e-mails, PDF generation,
							spreadsheets, etc.
						</li>
					</ul>
				</div>

				{/* cinephix */}
				<div className="experience">
					<div className="header">
						<img src="https://cinephix.com/favicon.svg" alt="Cinephix" />
						<h3>Cinephix</h3>

						<ul className="links">
							<li>
								<FaLink />
								<ExternalLink url="https://cinephix.com" text="cinephix.com" />
							</li>
							<li>
								<FaGithub />
								<ExternalLink
									url="https://github.com/iago-mendes/cinephix"
									text="iago-mendes/cinephix"
								/>
							</li>
						</ul>
					</div>

					<ul className="description">
						<li>This is an application made for cinephiles.</li>
						<li>
							Uses <strong>TMDb's API</strong> as the source for media data.
						</li>
						<li>Search, discover, save, and organize movies and TV shows.</li>
					</ul>
				</div>

				{/* stem guy */}
				<div className="experience">
					<div className="header">
						<img
							src="https://api.stemguy.club/public/logo.svg"
							alt="STEM Guy"
						/>
						<h3>STEM Guy</h3>
						<ul className="links">
							<li>
								<FaLink />
								<ExternalLink url="https://stemguy.club" text="stemguy.club" />
							</li>
							<li>
								<FaGithub />
								<ExternalLink
									url="https://github.com/iago-mendes/stemguy"
									text="iago-mendes/stemguy"
								/>
							</li>
						</ul>
					</div>

					<ul className="description">
						<li>This is a blog about science and technology.</li>
						<li>A server, a blog website, and an admin system.</li>
						<li>I have developed all software and written most articles.</li>
					</ul>
				</div>
			</section>

			<section className="experiences">
				<h2>Volunteer experiences</h2>

				{/* LOA */}
				<div className="experience">
					<div className="header">
						<img
							src="https://ligadeastronomia.com/img/favicon/android-icon-192x192.png"
							alt="LOA"
						/>
						<h3>Astronomical Olympic League (LOA)</h3>
						<ul className="links">
							<li>
								<FaLink />
								<ExternalLink
									url="https://ligadeastronomia.com"
									text="ligadeastronomia.com"
								/>
							</li>
						</ul>
					</div>

					<ul className="description">
						<li>This is a project about Astronomical Olympiads.</li>
						<li>
							As the <strong>Content Director</strong>, I am responsible for the
							Content Team.
						</li>
						<li>
							<strong>Free materials</strong>: classes, exercises, solutions,
							articles, etc..
						</li>
					</ul>
				</div>

				{/* IAAC */}
				<div className="experience">
					<div className="header">
						<img
							src="https://iaac.space/src/logo_tt_white_transparent_small.png"
							alt="IAAC"
						/>
						<h3>International Astronomy and Astrophysics Competition</h3>
						<ul className="links">
							<li>
								<FaLink />
								<ExternalLink url="https://iaac.space/en/" text="iaac.space" />
							</li>
							<li>
								<FaLink />
								<ExternalLink
									url="https://iaac.space/en/iagmendes"
									text="/iagmendes"
								/>
							</li>
						</ul>
					</div>

					<ul className="description">
						<li>This is an online astronomy competition for students.</li>
						<li>
							I am an <strong>official ambassador</strong> since February 2020
							to date.
						</li>
						<li>
							I won the{' '}
							<strong>Ambassador Award for Excellent Encouragement</strong> in
							2020.
						</li>
					</ul>
				</div>

				{/* CEAMONTES */}
				<div className="experience">
					<div className="header">
						<img src="https://github.com/ceamontes.png" alt="CEAMONTES" />
						<h3>Montes Claros's Astronomical Studies Center (CEAMONTES)</h3>
					</div>

					<ul className="description">
						<li>This is the Astronomy group of my local community.</li>
						<li>
							I have worked as <strong>event organizer</strong>,{' '}
							<strong>content creator</strong>, <strong>lecturer</strong>, and
							more.
						</li>
						<li>
							<strong>Public events</strong>: eclipse observation, astronomy
							classes, etc..
						</li>
					</ul>
				</div>

				{/* astronomical meetings */}
				<div className="experience">
					<div className="header">
						<h3>Astronomical Meetings</h3>
					</div>

					<ul className="description">
						<li>These were events about Astronomy in public schools.</li>
						<li>My friend and I were the organizers and lecturers.</li>
						<li>
							<strong>Practical activities</strong>: using a telescope and
							building rockets.
						</li>
					</ul>
				</div>
			</section>

			<section className="experiences">
				<h2>Science experiences</h2>

				{/* OBA 1 */}
				<div className="experience">
					<div className="header">
						<img
							src="http://www.oba.org.br/sisglob/sisglob_arquivos/LOGOTIPO_OBA_AF-1.png"
							alt="LOA"
						/>
						<h3>Advanced Astronomy Training</h3>
					</div>

					<ul className="description">
						<li>This was a training of 5 months (with 3 in-person camps).</li>
						<li>
							In the final ranking, I was in the <strong>11th position</strong>{' '}
							in Brazil.
						</li>
					</ul>
				</div>

				{/* OBA 2 */}
				<div className="experience">
					<div className="header">
						<img
							src="http://www.oba.org.br/sisglob/sisglob_arquivos/LOGOTIPO_OBA_AF-1.png"
							alt="IAAC"
						/>
						<h3>Space Journey Program</h3>
					</div>

					<ul className="description">
						<li>
							This was a week of immersion in <strong>space subjects</strong>.
						</li>
						<li>
							The event invited only <strong>90 students</strong> from all over
							Brazil.
						</li>
						<li>
							Selection based on the{' '}
							<strong>Brazilian Olympiad of Astronomy</strong>.
						</li>
					</ul>
				</div>

				{/* air viscosity */}
				<div className="experience">
					<div className="header">
						<h3>Air Viscosity Study</h3>
					</div>

					<ul className="description">
						<li>
							This was a <strong>scientific initiation</strong> in the Federal
							Instute (IFNMG).
						</li>
						<li>Air viscosity determined with a spring-mass oscillation.</li>
						<li>
							I was mentored by prof. Carvalho (
							<strong>master in Physics</strong>).
						</li>
					</ul>
				</div>
			</section>
		</Container>
	)
}

export default MainResume