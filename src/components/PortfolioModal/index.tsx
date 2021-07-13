import Image from 'next/image'
import {useRouter} from 'next/router'
import {FiX} from 'react-icons/fi'

import {Container} from './styles'
import {portfolio} from '../../assets/db/portfolio'
import ModalContainer from '../ModalContainer'
import {motion} from 'framer-motion'

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
			{query.portfolio && (
				<Container
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0, transition: {duration: 0.15}}}
				>
					<motion.header layoutId={`portfolio-${portfolioIndex}`}>
						<div className="img">
							<Image
								src={portfolioItem.image}
								alt={portfolioItem.title}
								width={1200}
								height={630}
								layout="responsive"
							/>
						</div>

						<button className="close" onClick={handleClose}>
							<FiX />
						</button>
					</motion.header>
				</Container>
			)}
		</ModalContainer>
	)
}
