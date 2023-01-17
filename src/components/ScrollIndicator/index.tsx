import {useRef} from 'react'
import {useRouter} from 'next/router'

import {Container} from './styles'
import {TextCallout} from '../TextCallout'

export function ScrollIndicator() {
	const ref = useRef(null)
	const {push} = useRouter()

	function handleClick() {
		push('/#about-me')
	}

	return (
		<Container ref={ref} onClick={handleClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 40 80"
				width={40}
				height={80}
			>
				<rect width={40} height={80} rx={20} strokeWidth={6} />
				<circle cx={5 + 15} cy={5 + 15} r={15} />
			</svg>

			<TextCallout text="scroll down" targetRef={ref} />
		</Container>
	)
}
