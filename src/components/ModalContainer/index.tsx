import {ReactNode} from 'react'

import {Container} from './styles'
import {useAvoidScroll} from '../../hooks/useAvoidScroll'

type Props = {
	isOpen: boolean
	children: ReactNode

	blurBackground?: boolean
}

export function ModalContainer({
	isOpen,
	children,
	blurBackground = false
}: Props) {
	useAvoidScroll(isOpen)

	if (!isOpen) return null

	return <Container blurBackground={blurBackground}>{children}</Container>
}

export default ModalContainer
