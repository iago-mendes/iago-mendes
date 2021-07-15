import {motion} from 'framer-motion'
import {useRouter} from 'next/router'

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

export default function Home() {
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
								image={portfolioItem.image}
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
								image={resume.image}
								handleClick={() => handleOpenResume(resume.pdfUrl)}
								key={index}
							/>
						))}
					</AnimatedGrid>
				</AnimatedSection>

				<AnimatedSection id="about-me" titleText="About me" />
			</HomeContainer>
		</PageContainer>
	)
}
