import {motion} from 'framer-motion'

import {links} from '../assets/db/links'
import ExternalLink from '../components/ExternalLink'
import {PageContainer} from '../components/PageContainer'
import {Container} from '../styles/pages/links'

function Links() {
	return (
		<PageContainer>
			<Container>
				<ul>
					{links.map(link => (
						<ExternalLink key={link.url} url={link.url}>
							<motion.li
								whileHover={{borderRadius: 0, scale: 0.95}}
								whileTap={{borderRadius: 0, scale: 0.9}}
							>
								<figure>
									<img src={link.icon} alt={'Icon of ' + link.display} />
								</figure>
								<span>{link.display}</span>
							</motion.li>
						</ExternalLink>
					))}
				</ul>
			</Container>
		</PageContainer>
	)
}

export default Links
