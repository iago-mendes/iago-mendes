import Image from 'next/image'

import {Container} from './styles'

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
	return (
		<Container
			onClick={handleClick}
			whileHover={{
				scale: 0.95,
				borderRadius: 0
			}}
			whileTap={{
				scale: 0.9,
				borderRadius: 0
			}}
			layoutId={layoutId}
			title={subtitle}
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
