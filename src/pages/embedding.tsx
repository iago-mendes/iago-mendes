import {embeddingLinks} from '../assets/db/links'
import ExternalLink from '../components/ExternalLink'
import {PageContainer} from '../components/PageContainer'
import {Container} from '../styles/pages/embedding'
import {AnimatedLinks} from '../components/AnimatedLinks'

function Embedding() {
	return (
		<PageContainer>
			<Container>
				<span className="title">
					Isometric Embeddings of Black Holes: Numerical Horizons in Euclidean
					Space
				</span>
				<span className="authors">
					<ExternalLink text="Iago Mendes" url="https://iagomendes.com" />,{' '}
					<ExternalLink
						text="Hengrui Zhu"
						url="https://phy.princeton.edu/people/hengrui-zhu"
					/>
					,{' '}
					<ExternalLink
						text="Robert Owen"
						url="https://www.oberlin.edu/robert-owen"
					/>{' '}
				</span>
				<p className="description">
					The isometric embedding of black hole apparent horizons in flat
					geometry is useful both for visualizing the horizon structure and for
					computing quasilocal quantities such as mass, energy, and angular
					momentum. We have previously presented two new approaches to this
					problem and confirmed that the results converge and agree with the
					expected. Recently, we have implemented both solvers in SpEC and used
					them to compute the embeddings in multiple binary black hole merger
					simulations with different spin and mass configurations. These
					embeddings show that the intrinsic shape of horizons can many times
					differ from the coordinate shape based on the gauge conditions.
					Additionally, comparing the results of the radically different methods
					gives us a clue of when an isometric embedding exists for the
					numerical horizons. In this presentation, we will quickly review these
					methods and focus on the results of these simulations.
				</p>
				<span className="links">Important Links</span>
				<AnimatedLinks links={embeddingLinks} />
			</Container>
		</PageContainer>
	)
}

export default Embedding
