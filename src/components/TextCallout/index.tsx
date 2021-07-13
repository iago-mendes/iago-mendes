import {useState, useEffect, MutableRefObject} from 'react'
import {BsFillTriangleFill} from 'react-icons/bs'

import {Container, Callout} from './styles'

type Props = {
	text: string
	targetRef: MutableRefObject<any>
}

export function TextCallout({text, targetRef}: Props) {
	const [showCallout, setShowCallout] = useState(false)

	useEffect(() => {
		if (targetRef && targetRef.current) {
			targetRef.current.onmouseenter = () => setShowCallout(true)
			targetRef.current.onmouseleave = () => setShowCallout(false)
		}
	}, [targetRef])

	return (
		<Container>
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
