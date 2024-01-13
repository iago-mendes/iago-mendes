import {HTMLAttributes} from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

import {Container} from './styles'

type Props = HTMLAttributes<HTMLDivElement> & {
	titleText: string
}

export function AnimatedSection({titleText, children, ...props}: Props) {
	const {ref: titleRef, inView: isTitleInView} = useInView()
	const {ref: contentRef, inView: isContentInView} = useInView()

	return (
		<Container {...props}>
			<motion.h2
				className="title"
				ref={titleRef}
				initial={false}
				animate={isTitleInView ? 'shown' : 'hidden'}
				variants={{shown: {x: 0, opacity: 1}, hidden: {x: -200, opacity: 0}}}
				transition={{duration: 1}}
			>
				{titleText}
			</motion.h2>

			<motion.div
				className="content"
				ref={contentRef}
				initial={false}
				animate={isContentInView ? 'shown' : 'hidden'}
				variants={{shown: {x: 0, opacity: 1}, hidden: {x: 200, opacity: 0}}}
				transition={{duration: 1}}
			>
				{children}
			</motion.div>
		</Container>
	)
}
