import {ReactNode} from 'react'

import {Container} from './styles'
import Image from 'next/image'

type EntryProps = {
	title: string
	image?: string
	children: ReactNode
}

export function Entry({title, image, children}: EntryProps) {
	return (
		<Container>
			{image && (
				<figure>
					<Image src={image} alt={title} fill />
				</figure>
			)}
			<aside>
				<h3>{title}</h3>
				<div className="content">{children}</div>
			</aside>
		</Container>
	)
}
