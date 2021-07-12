import {motion} from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.li)`
	list-style: none;
	position: relative;

	border-radius: 0.5rem;
	overflow: hidden;

	cursor: pointer;

	.title {
		position: absolute;
		bottom: 0;
		right: 0;

		padding: 0.5rem 1rem;
		background-color: ${p => p.theme.colors.background}e6;
		border-top-left-radius: 0.5rem;

		span {
			font-weight: 700;
			color: ${p => p.theme.colors.foreground};
		}
	}
`
