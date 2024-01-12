import {ParsedText} from '../ParsedText'
import {Container} from './styles'

type GridListProps = {
	list: string[]
}

export function GridList({list}: GridListProps) {
	return (
		<Container>
			{list.map((text, index) => (
				<p key={index}>
					<ParsedText text={text} />
				</p>
			))}
		</Container>
	)
}
