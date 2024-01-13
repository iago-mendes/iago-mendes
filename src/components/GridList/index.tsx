import {ParsedText} from '../ParsedText'
import {Container} from './styles'

type GridListProps = {
	list: string[]
}

export function GridList({list}: GridListProps) {
	return (
		<Container>
			{list.map((text, index) => (
				<div key={index}>
					<ParsedText text={text} />
				</div>
			))}
		</Container>
	)
}
