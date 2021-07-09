import {HomeContainer} from '../styles/pages/index'

import {PageContainer} from '../components/PageContainer'
import {HeroPlayground} from '../components/HeroPlayground'
import {ContentWithTextCallout} from '../components/ContentWithTextCallout'
import {ScrollIndicator} from '../components/ScrollIndicator'

export default function Home() {
	return (
		<PageContainer>
			<HomeContainer>
				<section id="hero">
					<main>
						<h2>
							Changing the world...
							<br /> with code.
						</h2>
						<h3>Meet Iago Mendes</h3>
						<ContentWithTextCallout text="scroll down">
							<ScrollIndicator />
						</ContentWithTextCallout>
					</main>
					<ContentWithTextCallout text="you can drag the letters!">
						<HeroPlayground />
					</ContentWithTextCallout>
				</section>

				<section id="portfolio">
					<h2 className="title">Portfolio</h2>
				</section>
			</HomeContainer>
		</PageContainer>
	)
}
