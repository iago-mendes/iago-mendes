import {ReactNode} from 'react'
import {CSSProperties} from 'styled-components'

import truncateText from '../utils/truncateText'

type Props = {
	url: string
	text?: string

	style?: CSSProperties
	children?: ReactNode
}

export function ExternalLink({url, text, style, children}: Props) {
	if (text)
		return (
			<a target="_blank" rel="noreferrer" href={url} style={style}>
				{truncateText(text, 25)}
			</a>
		)

	return (
		<a target="_blank" rel="noreferrer" href={url} style={style}>
			{children}
		</a>
	)
}

export default ExternalLink
