import {motion} from 'framer-motion'
import {FaExternalLinkAlt} from 'react-icons/fa'

import {Container} from './styles'
import {Link} from '../../assets/db/links'
import ExternalLink from '../ExternalLink'

type Props = {
	links: Link[]
}

export function AnimatedLinks({links}: Props) {
	return (
		<Container>
			{links.map(link =>
				link.disabled ? (
					<li className="disabled">
						<span>{link.text}</span>
					</li>
				) : (
					<ExternalLink key={link.url} url={link.url}>
						<motion.li
							whileHover={{borderRadius: 0, scale: 0.95}}
							whileTap={{borderRadius: 0, scale: 0.9}}
						>
							<span>{link.text}</span>
							<FaExternalLinkAlt />
						</motion.li>
					</ExternalLink>
				)
			)}
		</Container>
	)
}
