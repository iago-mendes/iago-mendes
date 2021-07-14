import {useRef, useState} from 'react'
import Link from 'next/link'
import {motion, useTransform, useViewportScroll} from 'framer-motion'

import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import ExternalLink from '../ExternalLink'

import {Container, Title, OptionsContainer, BurgerContainer} from './styles'
import {TextCallout} from '../TextCallout'
import {useDimensions} from '../../hooks/useDimensions'
import {BurgerButton} from '../BurgerButton'

export function Menu() {
	const {inDesktop, inMobile} = useDimensions()
	const {scrollY} = useViewportScroll()

	const menuHeight = useTransform(scrollY, [0, 200], [150, 50])
	const menuOpacity = useTransform(scrollY, [150, 200], [0, 1])
	const titleSize = useTransform(scrollY, [0, 200], [1.5, 1])
	const titleMargin = useTransform(scrollY, [0, 200], [125, 50])

	const [isBurgerOpen, setIsBurgerOpen] = useState(false)

	return (
		<Container
			initial={{opacity: 0}}
			animate={{opacity: 1, transition: {duration: 1}}}
			style={{height: menuHeight}}
		>
			<motion.div style={{opacity: menuOpacity}} className="background" />
			<Link href="/#">
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
	const emailRef = useRef(null)
	const githubRef = useRef(null)
	const linkedinRef = useRef(null)

	return (
		<OptionsContainer>
			<div className="route links">
				<Link href="/#portfolio">Portfolio</Link>
				<Link href="/#resumes">Resumes</Link>
				<Link href="/#about-me">About me</Link>
			</div>

			<div className="social links">
				<div ref={emailRef}>
					<ExternalLink url="mailto:contact@iago-mendes.me">
						<HiMail />
						<TextCallout text="E-mail" targetRef={emailRef} />
					</ExternalLink>
				</div>
				<div ref={githubRef}>
					<ExternalLink url="https://github.com/iago-mendes">
						<FaGithub />
						<TextCallout text="GitHub" targetRef={githubRef} />
					</ExternalLink>
				</div>
				<div ref={linkedinRef}>
					<ExternalLink url="https://www.linkedin.com/in/iago-b-mendes">
						<FaLinkedinIn />
						<TextCallout text="LinkedIn" targetRef={linkedinRef} />
					</ExternalLink>
				</div>
			</div>
		</OptionsContainer>
	)
}
