import {animate, motion, useMotionValue, useTransform} from 'framer-motion'

import {Container} from './styles'
import {useEffect, useState} from 'react'

const typingSpeed = 7.5 // characters per second
const baseText1 = 'Hello, world!'
const baseText2 = 'My name is Iago.'
const baseText3 = 'I am '
const redoTexts = [
	'a computational physicist',
	'a theoretical astrophysicist',
	'a software engineer',
	'a computer scientist',
	'a numerical relativist',
	'a physicist',
	'an astronomer'
]
const redoTextMaxLength = Math.max(...redoTexts.map(text => text.length))

export function AnimatedGreeting() {
	const count1 = useMotionValue(0)
	const [done1, setDone1] = useState(false)
	const displayText1 = useTransform(count1, latest =>
		baseText1.slice(0, Math.round(latest))
	)
	const count2 = useMotionValue(0)
	const [done2, setDone2] = useState(false)
	const displayText2 = useTransform(count2, latest =>
		baseText2.slice(0, Math.round(latest))
	)
	const count3 = useMotionValue(0)
	const [, setDone3] = useState(false)
	const displayText3 = useTransform(count3, latest =>
		baseText3.slice(0, Math.round(latest))
	)
	const redoTextIndex = useMotionValue(0)
	const redoBaseText = useTransform(
		redoTextIndex,
		latest => redoTexts[latest] || ''
	)
	const count4 = useMotionValue(0)
	const redoDisplayText = useTransform(count4, latest =>
		redoBaseText.get().slice(0, latest)
	)
	const updatedRedoText = useMotionValue(true)
	const [startAnimation, setStartAnimation] = useState(false)

	useEffect(() => {
		const timeoutId = setTimeout(() => setStartAnimation(true), 1000)
		const controls1 = animate(count1, baseText1.length, {
			delay: 2,
			duration: baseText1.length / typingSpeed,
			ease: 'easeInOut',
			onComplete: () => setDone1(true)
		})
		const controls2 = animate(count2, baseText2.length, {
			delay: 2 + baseText1.length / typingSpeed,
			duration: baseText2.length / typingSpeed,
			ease: 'easeInOut',
			onComplete: () => setDone2(true)
		})
		const controls3 = animate(count3, baseText3.length, {
			delay: 2 + (baseText1.length + baseText2.length) / typingSpeed,
			duration: baseText3.length / typingSpeed,
			ease: 'easeInOut',
			onComplete: () => setDone3(true)
		})
		const controls4 = animate(count4, redoTextMaxLength, {
			type: 'tween',
			delay:
				2 +
				(baseText1.length + baseText2.length + baseText3.length) / typingSpeed,
			duration: redoTextMaxLength / (1.5 * typingSpeed),
			ease: 'easeIn',
			repeat: Infinity,
			repeatType: 'reverse',
			repeatDelay: 1,
			onUpdate(latest) {
				if (updatedRedoText.get() === true && latest > 0) {
					updatedRedoText.set(false)
				} else if (updatedRedoText.get() === false && latest === 0) {
					if (redoTextIndex.get() === redoTexts.length - 1) {
						redoTextIndex.set(0)
					} else {
						redoTextIndex.set(redoTextIndex.get() + 1)
					}
					updatedRedoText.set(true)
				}
			}
		})
		return () => {
			clearTimeout(timeoutId)
			controls1.stop()
			controls2.stop()
			controls3.stop()
			controls4.stop()
		}
	}, [])

	return (
		<Container>
			<motion.span>{displayText1}</motion.span>
			{done1 && <br />}
			<motion.span>{displayText2}</motion.span>
			{done2 && <br />}
			{done2 && <br />}
			<motion.span className="small">{displayText3}</motion.span>
			<motion.span className="small">{redoDisplayText}</motion.span>
			{startAnimation && (
				<motion.div
					variants={{
						blinking: {
							opacity: [0, 0, 1, 1],
							transition: {
								duration: 1,
								repeat: Infinity,
								repeatDelay: 0,
								ease: 'linear',
								times: [0, 0.5, 0.5, 1]
							}
						}
					}}
					animate="blinking"
					className="cursor-blinker"
				/>
			)}
		</Container>
	)
}
