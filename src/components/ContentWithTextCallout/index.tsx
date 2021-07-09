import {ReactNode, useState} from 'react'
import {BsFillTriangleFill} from 'react-icons/bs'

import {Container, Callout} from './styles'

type Props = {
	text: string
	children: ReactNode
}

export function ContentWithTextCallout({text, children}: Props) {
	const [showCallout, setShowCallout] = useState(false)

	return (
		<Container
			onMouseEnter={() => setShowCallout(true)}
			onMouseLeave={() => setShowCallout(false)}
		>
			{children}

			<Callout
				initial={false}
				animate={showCallout ? 'open' : 'closed'}
				variants={{
					open: {
						height: 'fit-content',
						width: 'fit-content',
						opacity: 1
					},
					closed: {
						height: 0,
						width: 0,
						opacity: 0
					}
				}}
			>
				<div className="detail">
					<BsFillTriangleFill />
				</div>
				<div className="content">
					<span>{text}</span>
				</div>
			</Callout>
		</Container>
	)
}
