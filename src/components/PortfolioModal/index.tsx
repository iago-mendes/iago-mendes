import Image from 'next/image'
import {useRouter} from 'next/router'
import {FiX} from 'react-icons/fi'

import {Container} from './styles'
import {portfolio} from '../../assets/db/portfolio'
import ModalContainer from '../ModalContainer'

export function PortfolioModal() {
	const {query, push} = useRouter()

	const portfolioIndex = Number(query.portfolio)
	const portfolioItem =
		Number.isNaN(portfolioIndex) || portfolioIndex >= portfolio.length
			? null
			: portfolio[portfolioIndex]

	const isOpen = portfolioItem != null

	function handleClose() {
		push('/')
	}

	return (
		<ModalContainer isOpen={isOpen}>
			{isOpen && (
				<Container>
					<header>
						<Image
							src={portfolioItem.image}
							alt={portfolioItem.title}
							width={1200}
							height={630}
							layout="responsive"
						/>

						<button className="close" onClick={handleClose}>
							<FiX />
						</button>
					</header>
				</Container>
			)}
		</ModalContainer>
	)
}
