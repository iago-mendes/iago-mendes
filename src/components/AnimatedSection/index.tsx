import {HTMLAttributes} from 'react'
import {Container} from './styles'

type Props = HTMLAttributes<HTMLDivElement> & {
	titleText: string
}

export function AnimatedSection({titleText, children, ...props}: Props) {
	return (
		<Container {...props}>
			<h2 className="title">{titleText}</h2>

			<div className="content">{children}</div>
		</Container>
	)
}
