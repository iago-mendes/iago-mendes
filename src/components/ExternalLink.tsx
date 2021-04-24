import { CSSProperties } from 'styled-components'

interface ExternalLinkProps
{
	url: string
	text: string

	style?: CSSProperties
}

const ExternalLink: React.FC<ExternalLinkProps> = ({url, text, style}) =>
{
	return (
		<a
			target='_blank'
			rel='noreferrer'
			href={url}
			style={style}
		>
			{text}
		</a>
	)
}

export default ExternalLink