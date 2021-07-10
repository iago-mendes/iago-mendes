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

	@media (min-width: 1100px) {
		padding-right: 5rem;
	}
`

export const Title = styled(motion.h1)`
	font-family: ${p => p.theme.fonts.special};
	color: ${p => p.theme.colors.cyan};

	cursor: pointer;

	@media (max-width: 600px) {
		font-size: 1rem;
		margin-left: 5rem !important;
	}
`

export const OptionsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	.links {
		display: flex;
		align-items: center;
		gap: 2rem;

		a {
			text-decoration: none;
			font-family: ${p => p.theme.fonts.title};
			font-weight: 700;
		}
	}

	.route a {
		::after {
			content: '';
			width: 0px;
			height: 2px;
			display: block;
			background: ${p => p.theme.colors.foreground};
			transition: 0.25s;
		}
		:hover::after {
			width: 100%;
		}
	}

	.social a {
		font-size: 1.5rem;
		height: 1.5rem;
	}

	@media only screen and (min-width: 1100px) {
		gap: 5rem;
	}
`
