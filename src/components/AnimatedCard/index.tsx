import Image from 'next/image'

import {Container} from './styles'

type Props = {
	layoutId: string
	image: string
	title: string

	handleClick: () => void
}

export function AnimatedCard({layoutId, image, title, handleClick}: Props) {
	return (
		<Container
			layoutId={layoutId}
			onClick={handleClick}
			whileHover={{
				scale: 0.95,
				borderRadius: 0
			}}
		>
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
		</Container>
	)
}
