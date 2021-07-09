import {Container} from './styles'

export function ScrollIndicator() {
	return (
		<Container
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 40 80"
			width={40}
			height={80}
		>
			<rect width={40} height={80} rx={20} strokeWidth={6} />
			<circle cx={5 + 15} cy={5 + 15} r={15} />
		</Container>
	)
}
