import {ReactNode} from 'react'

import {Container} from './styles'

type EntryProps = {
	title: string
	date: string
	children?: ReactNode
}

export function EntryItem({title, date, children}: EntryProps) {
	return (
		<Container>
			<div className="header">
				<h4>{title}</h4>
				<span>{date}</span>
			</div>
			{children}
		</Container>
	)
}
