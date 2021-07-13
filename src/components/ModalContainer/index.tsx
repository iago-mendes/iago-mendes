import {ReactNode} from 'react'

import {Container} from './styles'
import {useAvoidScroll} from '../../hooks/useAvoidScroll'

type Props = {
	isOpen: boolean
	children: ReactNode
}

export function ModalContainer({isOpen, children}: Props) {
	useAvoidScroll(isOpen)

	if (!isOpen) return null

	return <Container>{children}</Container>
}

export default ModalContainer
