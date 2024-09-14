import {motion} from 'framer-motion'

import {ScrollIndicator} from '../ScrollIndicator'
import {Container} from './styles'

export function AnimatedGreeting() {
	return (
		<Container>
			<motion.main
				initial={{opacity: 0, x: -100}}
				animate={{opacity: 1, x: 0, transition: {duration: 1}}}
			>
				<h2>
					Changing the world...
					<br /> with code.
				</h2>
				<h3>Meet Iago Mendes</h3>
				<ScrollIndicator />
			</motion.main>
		</Container>
	)
}
