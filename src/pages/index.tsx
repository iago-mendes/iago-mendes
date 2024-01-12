import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {getPlaiceholder} from 'plaiceholder'
import type {InferGetStaticPropsType} from 'next'
import {useState} from 'react'

import {portfolio} from '../assets/db/portfolio'
import {resumes} from '../assets/db/resumes'

import {HomeContainer} from '../styles/pages/index'
import {PageContainer} from '../components/PageContainer'
import {HeroPlayground} from '../components/HeroPlayground'
import {ScrollIndicator} from '../components/ScrollIndicator'
import {useDimensions} from '../hooks/useDimensions'
import {AnimatedGrid} from '../components/AnimatedGrid'
import {AnimatedCard} from '../components/AnimatedCard'
import {AnimatedSection} from '../components/AnimatedSection'
import Link from 'next/link'

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	portfolioImagesProps,
	resumesImagesProps,
	meImageProps
}) => {
	const {inDesktop} = useDimensions()
	const {push} = useRouter()

	const [backgroundImgIsLoaded, setBackgroundImgIsLoaded] = useState(false)

	function handleOpenPortfolio(index: number) {
		push(`/?portfolio=${index}`, `/?portfolio=${index}`, {scroll: false})
	}

	function handleOpenResume(url: string) {
		window.open(url, '_blank').focus()
	}

	return (
		<PageContainer>
			<HomeContainer>
				<section id="hero">
					<motion.main
						initial={{opacity: 0, x: -100}}
						animate={{opacity: 1, x: 0, transition: {duration: 1}}}
					>
						<h2>
							Changing the world...
							<br /> with code.
						</h2>
						<h3>Meet Iago Mendes</h3>
						<ScrollIndicator />
					</motion.main>

					{inDesktop && <HeroPlayground />}

					<motion.div
						className="background"
						variants={{
							loading: {width: 0},
							loaded: {width: '100%'}
						}}
						animate={backgroundImgIsLoaded ? 'loaded' : 'loading'}
						transition={{duration: 0.5}}
					>
						<Image
							src="/images/me-background.jpg"
							fill={true}
							style={{objectFit: 'cover'}}
							onLoad={() => setBackgroundImgIsLoaded(true)}
							alt="Background Image"
						/>
					</motion.div>
				</section>

				<AnimatedSection id="about" titleText="About me">
					<motion.figure
						whileHover={{borderRadius: '10%'}}
						whileTap={{scale: 0.9, borderRadius: '10%'}}
						style={{position: 'relative'}}
					>
						<Image
							src={meImageProps.src}
							blurDataURL={meImageProps.blurDataURL}
							placeholder="blur"
							alt="Iago"
							fill={true}
							style={{objectFit: 'cover'}}
						/>
					</motion.figure>

					<p>Hello, world! My name is Iago.</p>
					<p>
						Throughout my journey, I have been deeply involved with{' '}
						<strong>Physics</strong>, <strong>Astronomy</strong>, and{' '}
						<strong>Computer Science</strong> in many experiences, about which
						you can learn more on{' '}
						<a
							href="https://www.linkedin.com/in/iago-b-mendes"
							target="_blank"
							rel="noopener noreferrer"
						>
							my LinkedIn profile
						</a>
						. I am currently pursuing my undergraduate degree at{' '}
						<strong>Oberlin College</strong>, where I am double majoring in{' '}
						<strong>Computer Science</strong> and <strong>Physics</strong> (with
						a concentration in <strong>Astrophysics</strong>).
					</p>
					<p>
						As a <strong>software engineer</strong>, I have had 2 internships at{' '}
						<strong>Google</strong>, working with the <strong>Wear OS</strong>{' '}
						and <strong>Google Assistant</strong> teams. I have also worked with{' '}
						<strong>web</strong> and <strong>mobile development</strong> on my
						personal projects, some of which you can check on{' '}
						<Link href="/#portfolio">my portfolio</Link>.
					</p>
					<p>
						As a <strong>computational physicist</strong>, I have been
						conducting research on <strong>Numerical Relativity</strong> for the
						past 2 years as a member of the{' '}
						<a
							href="https://www.black-holes.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							SXS collaboration
						</a>
						. My research has been focused on describing the surface of{' '}
						<strong>black holes</strong> in computational simulations.
					</p>
				</AnimatedSection>

				<AnimatedSection id="resume" titleText="Resume">
					<div className="single-content">
						{resumes.map((resume, index) => (
							<AnimatedCard
								title={resume.title}
								subtitle="Open in a new tab"
								imageProps={resumesImagesProps[index]}
								handleClick={() => handleOpenResume(resume.pdfUrl)}
								key={index}
							/>
						))}
					</div>
				</AnimatedSection>

				<AnimatedSection id="education" titleText="Education"></AnimatedSection>

				<AnimatedSection id="research" titleText="Research"></AnimatedSection>

				<AnimatedSection
					id="experience"
					titleText="Work Experience"
				></AnimatedSection>

				<AnimatedSection id="projects" titleText="Projects">
					<AnimatedGrid modal="portfolio">
						{portfolio.map((portfolioItem, index) => (
							<AnimatedCard
								layoutId={`portfolio-${index}`}
								imageProps={portfolioImagesProps[index]}
								title={portfolioItem.title}
								subtitle={portfolioItem.subtitle}
								handleClick={() => handleOpenPortfolio(index)}
								key={portfolioItem.title}
							/>
						))}
					</AnimatedGrid>
				</AnimatedSection>

				<AnimatedSection id="awards" titleText="Awards"></AnimatedSection>
			</HomeContainer>
		</PageContainer>
	)
}

export const getStaticProps = async () => {
	const portfolioImagesProps = await Promise.all(
		portfolio.map(async ({image}) => {
			const {img, base64} = await getPlaiceholder(image)
			return {...img, blurDataURL: base64}
		})
	)

	const resumesImagesProps = await Promise.all(
		resumes.map(async ({image}) => {
			const {img, base64} = await getPlaiceholder(image)
			return {...img, blurDataURL: base64}
		})
	)

	const meImageProps = await getPlaiceholder('/images/me.jpg').then(
		({img, base64}) => ({
			...img,
			blurDataURL: base64
		})
	)

	return {
		props: {
			portfolioImagesProps,
			resumesImagesProps,
			meImageProps
		}
	}
}

export default Home
