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

				<AnimatedSection id="resumes" titleText="Resumes">
					<AnimatedGrid>
						{resumes.map((resume, index) => (
							<AnimatedCard
								title={resume.title}
								imageProps={resumesImagesProps[index]}
								handleClick={() => handleOpenResume(resume.pdfUrl)}
								key={index}
							/>
						))}
					</AnimatedGrid>
				</AnimatedSection>

				<AnimatedSection id="about-me" titleText="About me">
					<motion.figure whileHover={{borderRadius: '50%'}}>
						<Image {...meImageProps} placeholder="blur" />
					</motion.figure>

					<p>Hello, world! My name is Iago.</p>
					<p>
						I am a <strong>software developer</strong> passionate about{' '}
						<strong>front-end</strong> technologies. I love helping to bring
						ideas to the world through the internet, which is what motivates me
						every day. In this area, I am currently focused on one stack:{' '}
						<strong>Next.js</strong>, <strong>React.js</strong>,{' '}
						<strong>React Native</strong>, <strong>Expo</strong>,{' '}
						<strong>Node.js</strong>, <strong>JavaScript</strong>, and{' '}
						<strong>TypeScript</strong>.
					</p>
					<p>
						Besides, I am passionate about science, especially{' '}
						<strong>Physics</strong> and <strong>Astronomy</strong>. I have done
						a lot of projects during high school related to my interests and{' '}
						<strong>education</strong>, which I intend to keep doing in college.
						If you would like to know some of my activities and achievements, I
						invite you to take a look at my profile.
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

	const meImageProps = await getPlaiceholder('/images/me.png').then(
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
