import Image from 'next/image'
import {useRouter} from 'next/router'
import {FiX} from 'react-icons/fi'
import {motion} from 'framer-motion'

import {Container} from './styles'
import {portfolio} from '../../assets/db/portfolio'
import ModalContainer from '../ModalContainer'
import {useClickOutside} from '../../hooks/useClickOutside'
import ExternalLink from '../ExternalLink'
import {formatDate} from '../../utils/formatDate'

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
		push('/', '/', {scroll: false})
	}

	return (
		<ModalContainer isOpen={isOpen}>
			{query.portfolio && (
				<Container
					ref={ref}
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					exit={{opacity: 0, scale: 0.9}}
				>
					<header>
						<motion.div
							className="img"
							layoutId={`portfolio-${portfolioIndex}`}
						>
							<Image
								src={portfolioItem.image}
								alt={portfolioItem.title}
								width={1200}
								height={630}
								layout="responsive"
							/>
						</motion.div>

						<button className="close" onClick={handleClose}>
							<FiX />
						</button>
					</header>

					<div className="details">
						<div className="titles">
							<h3>{portfolioItem.title}</h3>
							<span>{portfolioItem.subtitle}</span>
						</div>

						<span className="dates">
							{portfolioItem.startDate === portfolioItem.endDate
								? formatDate(portfolioItem.startDate)
								: `${formatDate(portfolioItem.startDate)} - ${formatDate(
										portfolioItem.endDate
								  )}`}
						</span>
					</div>

					{portfolioItem.links && (
						<div className="links">
							{portfolioItem.links.map(({url, displayUrl}) => (
								<ExternalLink key={url} url={url} text={displayUrl} />
							))}
						</div>
					)}

					<p className="description">{portfolioItem.description}</p>

					{portfolioItem.descriptionItems && (
						<ul className="descriptionItems">
							{portfolioItem.descriptionItems.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					)}
				</Container>
			)}
		</ModalContainer>
	)
}
