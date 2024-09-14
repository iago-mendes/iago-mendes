import {ReactNode} from 'react'
import {AnimatePresence, LayoutGroup} from 'framer-motion'

import {Container} from './styles'
import {PortfolioModal} from '../PortfolioModal'

type Props = {
	children: ReactNode
	modal?: 'portfolio'
}

export function AnimatedGrid({children, modal}: Props) {
	return (
		<LayoutGroup>
			{modal && (
				<AnimatePresence>
					{modal === 'portfolio' && <PortfolioModal />}
				</AnimatePresence>
			)}
			<Container>{children}</Container>
		</LayoutGroup>
	)
}
