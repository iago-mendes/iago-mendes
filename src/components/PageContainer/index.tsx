import {useTransform, useViewportScroll} from 'framer-motion'
import {ReactNode} from 'react'

import {Container} from './styles'

type Props = {
	children: ReactNode
}

export function PageContainer({children}: Props) {
	const {scrollY} = useViewportScroll()
	const marginTop = useTransform(scrollY, [0, 200], [150, 250])

	return <Container style={{marginTop}}>{children}</Container>
}
