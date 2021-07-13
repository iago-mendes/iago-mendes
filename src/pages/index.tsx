import {motion} from 'framer-motion'
import {useRouter} from 'next/router'

import {HomeContainer} from '../styles/pages/index'

import {PageContainer} from '../components/PageContainer'
import {HeroPlayground} from '../components/HeroPlayground'
import {ScrollIndicator} from '../components/ScrollIndicator'
import {useDimensions} from '../hooks/useDimensions'
import {AnimatedGrid} from '../components/AnimatedGrid'
import {portfolio} from '../assets/db/portfolio'
import {AnimatedCard} from '../components/AnimatedCard'

export default function Home() {
	const {inDesktop} = useDimensions()
	const {push} = useRouter()

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

				<section id="portfolio">
					<h2 className="title">Portfolio</h2>

					<div className="content">
						<AnimatedGrid modal="portfolio">
							{portfolio.map((portfolioItem, index) => (
								<AnimatedCard
									layoutId={`portfolio-${index}`}
									image={portfolioItem.image}
									title={portfolioItem.title}
									subtitle={portfolioItem.subtitle}
									handleClick={() => push(`/?portfolio=${index}`)}
									key={portfolioItem.title}
								/>
							))}
						</AnimatedGrid>
					</div>
				</section>

				<section id="resumes">
					<h2 className="title">Resumes</h2>
				</section>

				<section id="about-me">
					<h2 className="title">About me</h2>
				</section>
			</HomeContainer>
		</PageContainer>
	)
}
