import {ReactNode} from 'react'

import {Container} from './styles'

type EntryProps = {
	title: string
	children: ReactNode
}

export function Entry({title, children}: EntryProps) {
	return (
		<Container>
			<h3>{title}</h3>
			<div className="content">{children}</div>
		</Container>
	)
}
