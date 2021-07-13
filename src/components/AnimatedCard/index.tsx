import {useRef} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

import {Container} from './styles'
import {TextCallout} from '../TextCallout'

type Props = {
	layoutId: string
	image: string
	title: string
	subtitle: string

	handleClick: () => void
}

export function AnimatedCard({
	layoutId,
	image,
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
					<Image
						src={image}
						alt={title}
						width={1200}
						height={630}
						layout="responsive"
					/>

					<div className="title">
						<span>{title}</span>
					</div>
				</div>

				<TextCallout text={subtitle} targetRef={ref} />
			</motion.div>
		</Container>
	)
}
