import {motion} from 'framer-motion'

import {Container} from './styles'

export function AnimatedGreeting() {
	return (
		<Container>
			<motion.main
				initial={{opacity: 0, x: -100}}
				animate={{opacity: 1, x: 0, transition: {duration: 1}}}
			>
				<p>
					Hello, world!
					<br />
					My name is Iago.
				</p>
				<p className="small">I am a computational physicist</p>
			</motion.main>
		</Container>
	)
}
