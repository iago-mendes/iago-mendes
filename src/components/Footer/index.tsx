import {FaHeart} from 'react-icons/fa'

import ExternalLink from '../ExternalLink'
import {Container} from './styles'

export function Footer() {
	return (
		<Container>
			<ExternalLink url="https://github.com/iago-mendes/iago-mendes">
				Made with <FaHeart /> using Next.js &amp; React.js
			</ExternalLink>
		</Container>
	)
}
