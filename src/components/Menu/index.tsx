import {useState} from 'react'
import Link from 'next/link'
import {motion, useTransform, useViewportScroll} from 'framer-motion'

import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import ExternalLink from '../ExternalLink'

import {Container, Title, OptionsContainer, BurgerContainer} from './styles'
import {ContentWithTextCallout} from '../ContentWithTextCallout'
import {useDimensions} from '../../hooks/useDimensions'
import {BurgerButton} from '../BurgerButton'

export function Menu() {
	const {inDesktop, inMobile} = useDimensions()
	const {scrollY} = useViewportScroll()

	const menuHeight = useTransform(scrollY, [0, 200], [150, 50])
	const menuOpacity = useTransform(scrollY, [150, 200], [0, 1])
	const titleSize = useTransform(scrollY, [0, 200], [2, 1])
	const titleMargin = useTransform(scrollY, [0, 200], [125, 50])

	const [isBurgerOpen, setIsBurgerOpen] = useState(false)

	return (
		<Container
			initial={{opacity: 0}}
			animate={{opacity: 1, transition: {duration: 1}}}
			style={{height: menuHeight}}
		>
			<motion.div style={{opacity: menuOpacity}} className="background" />
			<Link href="/">
				<Title style={{scale: titleSize, marginLeft: titleMargin}}>
					Iago Mendes
				</Title>
			</Link>

			{inDesktop && <Options />}
			{inMobile && (
				<>
					<BurgerButton isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />

					<BurgerContainer
						variants={{
							closed: {marginLeft: '100vw'},
							openned: {
								marginLeft: '25vw',
								transition: {type: 'spring', stiffness: 250, damping: 15}
							}
						}}
						initial={false}
						animate={isBurgerOpen ? 'openned' : 'closed'}
						style={{
							marginTop: menuHeight,
							height: `calc(100vh - ${menuHeight})`
						}}
					>
						<Options />
					</BurgerContainer>
				</>
			)}
		</Container>
	)
}

function Options() {
	return (
		<OptionsContainer>
			<div className="route links">
				<Link href="">Portfolio</Link>
				<Link href="">Resume</Link>
				<Link href="">About me</Link>
			</div>

			<div className="social links">
				<ContentWithTextCallout text="E-mail">
					<ExternalLink url="mailto:contact@iago-mendes.me">
						<HiMail />
					</ExternalLink>
				</ContentWithTextCallout>
				<ContentWithTextCallout text="GitHub">
					<ExternalLink url="https://github.com/iago-mendes">
						<FaGithub />
					</ExternalLink>
				</ContentWithTextCallout>
				<ContentWithTextCallout text="LinkedIn">
					<ExternalLink url="https://www.linkedin.com/in/iago-b-mendes">
						<FaLinkedinIn />
					</ExternalLink>
				</ContentWithTextCallout>
			</div>
		</OptionsContainer>
	)
}
