import Image from 'next/image'
import {useRouter} from 'next/router'
import {FiX} from 'react-icons/fi'

import {Container} from './styles'
import {portfolio} from '../../assets/db/portfolio'
import ModalContainer from '../ModalContainer'
import {motion} from 'framer-motion'
import {useClickOutside} from '../../hooks/useClickOutside'

export function PortfolioModal() {
	const {query, push} = useRouter()
	const ref = useClickOutside(handleClose)

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
					ref={ref}
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					exit={{opacity: 0, scale: 0.9}}
					layoutId={`portfolio-${portfolioIndex}`}
				>
					<motion.header>
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
