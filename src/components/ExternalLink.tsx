import { CSSProperties } from 'styled-components'

import truncateText from '../utils/truncateText'

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
			{truncateText(text, 27)}
		</a>
	)
}

export default ExternalLink