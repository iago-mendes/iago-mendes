import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {getPlaiceholder} from 'plaiceholder'
import type {InferGetStaticPropsType} from 'next'
import {useState} from 'react'
import Link from 'next/link'

import {portfolio} from '../assets/db/portfolio'
import {resumes} from '../assets/db/resumes'

import {HomeContainer} from '../styles/pages/index'
import {PageContainer} from '../components/PageContainer'
import {HeroPlayground} from '../components/HeroPlayground'
import {useDimensions} from '../hooks/useDimensions'
import {AnimatedGrid} from '../components/AnimatedGrid'
import {AnimatedCard} from '../components/AnimatedCard'
import {AnimatedSection} from '../components/AnimatedSection'
import {EducationContent} from '../components/_sectionContents/education'
import {ResearchContent} from '../components/_sectionContents/research'
import {ExperienceContent} from '../components/_sectionContents/experience'
import {AwardsContent} from '../components/_sectionContents/awards'
import ExternalLink from '../components/ExternalLink'
import {SEOHead} from '../components/SEOHead'
import {AnimatedGreeting} from '../components/AnimatedGreeting'

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
			<SEOHead
				title="Iago Mendes"
				description="Software developer & computational physicist"
				image="https://iagomendes.com/images/me.jpg"
				url="https://iagomendes.com"
			/>
			<HomeContainer>
				<section id="hero">
					<AnimatedGreeting />

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
						Throughout my journey, I have been deeply involved with physical and
						computational sciences. Currently, I am pursuing my undergraduate
						degree at{' '}
						<ExternalLink
							text="Oberlin College"
							url="https://www.oberlin.edu/"
						/>
						, where I am double majoring in <strong>Physics</strong> (with a
						concentration in <strong>Astrophysics</strong>) and{' '}
						<strong>Computer Science</strong>.
					</p>
					<p>
						As a <strong>computational physicist</strong>, I have been
						conducting research on <strong>Numerical Relativity</strong> for the
						past 3 years as a member of the{' '}
						<a
							href="https://www.black-holes.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							SXS collaboration
						</a>
						. My research has been focused on describing the surface of{' '}
						<strong>black holes</strong> in a flat geometry (known as the
						isometric embedding problem) for computational simulations.
					</p>
					<p>
						As a <strong>software engineer</strong>, I have had 2 internships at{' '}
						<strong>Google</strong>, working with{' '}
						<strong>Wear OS (Android)</strong> and the{' '}
						<strong>Google Assistant AI</strong>. I have also worked with web
						and mobile development on many personal projects, some of which you
						can check on <Link href="/#projects">my portfolio</Link>.
					</p>
				</AnimatedSection>

				<AnimatedSection id="resume" titleText="Resume">
					<div className="list">
						{resumes.map((resume, index) => (
							<div key={index}>
								<AnimatedCard
									title={resume.title}
									subtitle="Open in a new tab"
									imageProps={resumesImagesProps[index]}
									handleClick={() => handleOpenResume(resume.pdfUrl)}
								/>
							</div>
						))}
					</div>
				</AnimatedSection>

				<AnimatedSection id="education" titleText="Education">
					<EducationContent />
				</AnimatedSection>

				<AnimatedSection id="research" titleText="Research">
					<ResearchContent />
				</AnimatedSection>

				<AnimatedSection id="experience" titleText="Work Experience">
					<ExperienceContent />
				</AnimatedSection>

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

				<AnimatedSection id="awards" titleText="Awards">
					<AwardsContent />
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
