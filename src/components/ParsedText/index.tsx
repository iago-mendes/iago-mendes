import {Container} from './styles'

type ParsedTextProps = {
	text: string
}

type ParsedTextPart = {
	bold: boolean
	text: string
}

export function ParsedText({text}: ParsedTextProps) {
	function parseText(text: string): ParsedTextPart[] {
		const textParts: ParsedTextPart[] = []

		let bold = false

		text.split('<<').forEach(tmpPart => {
			tmpPart.split('>>').forEach(part => {
				textParts.push({text: part, bold})
				bold = !bold
			})
		})

		return textParts
	}

	return (
		<Container>
			{parseText(text).map(({text, bold}, index) => {
				if (bold) return <strong key={index}>{text}</strong>
				else return <span key={index}>{text}</span>
			})}
		</Container>
	)
}
