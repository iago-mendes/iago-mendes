import {useRef} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

import {Container} from './styles'
import {TextCallout} from '../TextCallout'

type Props = {
	title: string
	imageProps: {
		blurDataURL: string
		src: string
		height: number
		width: number
		type?: string
	}

	layoutId?: string
	subtitle?: string

	handleClick: () => void
}

export function AnimatedCard({
	layoutId,
	imageProps,
	title,
	subtitle,
	handleClick
}: Props) {
	const ref = useRef(null)

	return (
		<Container
			onClick={handleClick}
			whileTap={{
				scale: 0.9
			}}
			layoutId={layoutId}
			ref={ref}
		>
			<motion.div className="card">
				<div className="background">
					<Image {...imageProps} placeholder="blur" />

					<div className="title">
						<span>{title}</span>
					</div>
				</div>

				{subtitle && <TextCallout text={subtitle} targetRef={ref} />}
			</motion.div>
		</Container>
	)
}
