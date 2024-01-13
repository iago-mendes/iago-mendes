import {Container} from './styles'

type ParsedTextProps = {
	text: string
}

type ParsedTextPart = {
	bold: boolean
	text: string
	url?: string
}

export function ParsedText({text}: ParsedTextProps) {
	function parseText(text: string): ParsedTextPart[] {
		const intermediateTextParts: ParsedTextPart[] = []
		let bold = false

		text.split('<<').forEach(tmpPart => {
			tmpPart.split('>>').forEach(part => {
				intermediateTextParts.push({text: part, bold})
				bold = !bold
			})
		})

		const textParts: ParsedTextPart[] = []

		intermediateTextParts.forEach(({text, bold}) => {
			let isLink = false
			text.split('[[').forEach(tmpPart => {
				tmpPart.split(']]').forEach(part => {
					const [text, url] = isLink ? part.split(',') : [part, undefined]
					textParts.push({text, bold, url})
					isLink = !isLink
				})
			})
		})

		return textParts
	}

	return (
		<Container>
			{parseText(text).map(({text, bold, url}, index) => {
				if (url)
					return (
						<a href={url} target="_blank" rel="noopener noreferrer">
							{text}
						</a>
					)
				else if (bold) return <strong key={index}>{text}</strong>
				else return <span key={index}>{text}</span>
			})}
		</Container>
	)
}
