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
import {useClickOutside} from '../../hooks/useClickOutside'

export function Menu() {
	const {width} = useDimensions()
	const {scrollY} = useViewportScroll()
	const burgerRef = useClickOutside(closeBurger)

	const menuHeight = useTransform(scrollY, [0, 200], [150, 50])
	const menuOpacity = useTransform(scrollY, [150, 200], [0, 1])
	const titleSize = useTransform(scrollY, [0, 200], [1.5, 1])
	const titleMargin = useTransform(scrollY, [0, 200], [125, 50])

	const [isBurgerOpen, setIsBurgerOpen] = useState(false)

	function closeBurger() {
		setIsBurgerOpen(false)
	}

	return (
		<Container
			initial={{opacity: 0, y: -50}}
			animate={{opacity: 1, y: 0, transition: {duration: 1}}}
			style={{height: menuHeight}}
		>
			<motion.div style={{opacity: menuOpacity}} className="background" />
			<Link href="/#">
				<Title style={{scale: titleSize, marginLeft: titleMargin}}>
					Iago Mendes
				</Title>
			</Link>

			{width >= 1000 ? (
				<Options />
			) : (
				<div ref={burgerRef}>
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
						<Options closeBurger={closeBurger} inBurger={true} />
					</BurgerContainer>
				</div>
			)}
		</Container>
	)
}

function Options({
	closeBurger,
	inBurger
}: {
	closeBurger?: () => void
	inBurger?: boolean
}) {
	const emailRef = useRef(null)
	const githubRef = useRef(null)
	const linkedinRef = useRef(null)

	const {width} = useDimensions()

	return (
		<OptionsContainer>
			<div className="route links" onClick={closeBurger}>
				{(inBurger || width > 1300) && <Link href="/#about">About</Link>}
				<Link href="/#resume">Resume</Link>
				{(inBurger || width > 1250) && (
					<Link href="/#education">Education</Link>
				)}
				<Link href="/#research">Research</Link>
				<Link href="/#experience">Experience</Link>
				<Link href="/#projects">Projects</Link>
				{(inBurger || width > 1050) && <Link href="/#awards">Awards</Link>}
			</div>

			<div className="social links">
				<div ref={emailRef}>
					<ExternalLink url="mailto:ibrazmen@oberlin.edu">
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
					<ExternalLink url="https://www.linkedin.com/in/mendes-iago">
						<FaLinkedinIn />
						<TextCallout text="LinkedIn" targetRef={linkedinRef} />
					</ExternalLink>
				</div>
			</div>
		</OptionsContainer>
	)
}
