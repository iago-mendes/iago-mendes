import {ParsedText} from '../ParsedText'
import {Container} from './styles'

type InfoListProps = {
	list: string[]
}

export function InfoList({list}: InfoListProps) {
	return (
		<Container>
			{list.map((text, index) => (
				<li key={index}>
					<ParsedText text={text} />
				</li>
			))}
		</Container>
	)
}
