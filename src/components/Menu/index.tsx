import {motion, useTransform, useViewportScroll} from 'framer-motion'
import Link from 'next/link'

import {Container, Title, OptionsContainer} from './styles'

export function Menu() {
	const {scrollY} = useViewportScroll()

	const menuHeight = useTransform(scrollY, [0, 200], [150, 50])
	const menuOpacity = useTransform(scrollY, [150, 200], [0, 1])
	const titleSize = useTransform(scrollY, [0, 200], [2, 1])
	const titleMargin = useTransform(scrollY, [0, 200], [200, 50])

	return (
		<Container style={{height: menuHeight}}>
			<motion.div style={{opacity: menuOpacity}} className="background" />
			<Link href="/">
				<Title style={{scale: titleSize, marginLeft: titleMargin}}>
					Iago Mendes
				</Title>
			</Link>

			<Options />
		</Container>
	)
}

function Options() {
	return (
		<OptionsContainer>
			<div className="route links">
				<Link href="">Portfolio</Link>
				<Link href="">Resume</Link>
			</div>

			<div className="social links">
				<a href="">GitHub</a>
				<a href="">LinkedIn</a>
			</div>
		</OptionsContainer>
	)
}
