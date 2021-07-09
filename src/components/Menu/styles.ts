import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled(motion.nav)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-right: 2rem;

	* {
		z-index: 100;
	}

	.background {
		position: absolute;
		z-index: 99;

		background: ${p => p.theme.colors.background};
		width: 100%;
		height: 100%;

		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
	}
`

export const Title = styled(motion.h1)`
	font-family: ${p => p.theme.fonts.special};
	font-size: 3rem;
	color: ${p => p.theme.colors.cyan};

	cursor: pointer;
`

export const OptionsContainer = styled.div``
