import {ReactNode} from 'react'

import {Container} from './styles'

type EntryProps = {
	title: string
	children: ReactNode
}

/**
 * Component for CV entry.
 */
export function Entry({title, children}: EntryProps) {
	return (
		<Container>
			<h3>{title}</h3>
			{children}
		</Container>
	)
}
