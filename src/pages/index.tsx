import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {getPlaiceholder} from 'plaiceholder'
import type {InferGetStaticPropsType} from 'next'

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

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	portfolioImagesProps,
	resumesImagesProps,
	meImageProps
}) => {
	const {inDesktop} = useDimensions()
	const {push} = useRouter()

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
				</section>

				<AnimatedSection id="portfolio" titleText="Portfolio">
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

				<AnimatedSection id="about-me" titleText="About me">
					<motion.figure
						whileHover={{borderRadius: '10%'}}
						whileTap={{scale: 0.9, borderRadius: '10%'}}
					>
						<Image {...meImageProps} placeholder="blur" />
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
							my profile
						</a>
						. As a <strong>software engineer</strong>, I have mostly been
						involved with <strong>web development</strong>, but I have also
						experimented with other areas. As a <strong>researcher</strong>, I
						have been conducting research in the area of{' '}
						<strong>Theoretical Astrophysics</strong> during my college degree,
						focusing heavily in the <strong>computational methods</strong>.
					</p>
					<p>
						At the moment, a field that interests me a lot is{' '}
						<strong>Quantum Computing</strong>. I am trying to learn more about
						this area and searching for opportunities. My current post-college
						goal is to go to a <strong>graduate school</strong> in order to
						pursue a <strong>PhD</strong> in{' '}
						<strong>Quantum Information and Computation</strong>.
					</p>
				</AnimatedSection>
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
