import {ReactNode} from 'react'
import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'

import {Container} from './styles'

type Props = {
	children: ReactNode
	modal: ReactNode
}

export function AnimatedGrid({children, modal}: Props) {
	return (
		<AnimateSharedLayout type="crossfade">
			<AnimatePresence>{modal}</AnimatePresence>
			<Container>{children}</Container>
		</AnimateSharedLayout>
	)
}
