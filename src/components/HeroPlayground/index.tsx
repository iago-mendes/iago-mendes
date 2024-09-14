import {motion} from 'framer-motion'
import {useLayoutEffect, useRef, useState} from 'react'

import {Container} from './styles'
import theme from '../../styles/theme'

const IPath =
	'M 0 0 L 15 0 L 15 5 L 10 5 L 10 15 L 15 15 L 15 20 L 0 20 L 0 15 L 5 15 L 5 5 L 0 5 L 0 0'
const MPath =
	'M 0 0 L 0 20 L 4 20 L 4 10 L 10 15 L 16 10 L 16 20 L 20 20 L 20 0 L 10 10 L 0 0'

export function HeroPlayground() {
	const ref = useRef(null)
	const [IConstraints, setIConstraints] = useState(null)
	const [MConstraints, setMConstraints] = useState(null)

	// Calculate the constraints after the component has mounted
	useLayoutEffect(() => {
		if (ref.current) {
			const containerRect = ref.current.getBoundingClientRect()

			// Set constraints based on the container's size
			setIConstraints({
				left: -containerRect.width / 6,
				right: containerRect.width / 1.5,
				top: -containerRect.height / 3,
				bottom: containerRect.height / 3
			})
			setMConstraints({
				left: -containerRect.width / 1.5,
				right: containerRect.width / 6,
				top: -containerRect.height / 3,
				bottom: containerRect.height / 3
			})
		}
	}, [ref])

	return (
		<Container ref={ref}>
			<div>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-1 -1 17 22"
					style={{width: 150, height: 200, rotate: '-10deg'}}
					whileTap={{scale: 0.95}}
					drag={true}
					dragConstraints={IConstraints}
				>
					<Icon path={IPath} color={theme.colors.foreground} />
				</motion.svg>

				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-1 -1 22 22"
					style={{width: 200, height: 200, rotate: '5deg'}}
					whileTap={{scale: 0.95}}
					drag={true}
					dragConstraints={MConstraints}
				>
					<Icon path={MPath} color={theme.colors.cyan} />
				</motion.svg>
			</div>
		</Container>
	)
}

function Icon({path, color}: {path: string; color: string}) {
	return (
		<motion.path
			d={path}
			stroke={color}
			variants={{
				hidden: {
					pathLength: 0,
					fill: color + '00' // 0%
				},
				visible: {
					pathLength: 1,
					fill: color,
					transition: {
						duration: 2
					}
				}
			}}
			initial="hidden"
			animate="visible"
		/>
	)
}
