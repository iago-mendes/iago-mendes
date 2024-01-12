import styled from 'styled-components'
import {motion} from 'framer-motion'
import theme from '../../styles/theme'

export const Container = styled(motion.header)`
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

	a {
		text-decoration: none;
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

export const OptionsContainer = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10rem;

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

	.route {
		flex-direction: column;

		a {
			font-size: 1.25rem;

			display: flex;
			flex-direction: column;
			align-items: center;

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
	}

	.social a {
		font-size: 1.5rem;
		height: 1.5rem;
	}

	@media (min-width: 900px) {
		flex-direction: row;
		gap: 2rem;

		.route {
			flex-direction: row;

			a {
				font-size: unset;
			}
		}
	}

	@media (min-width: 1100px) {
		gap: 5rem;
	}
`

export const BurgerContainer = styled(motion.aside)`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 100;

	background-color: ${theme.colors.background};
	box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.5);
	overflow: hidden;

	display: flex;
	align-items: center;
	justify-content: center;

	/* padding-right: 2rem; */

	/* * {
		z-index: 100;
	} */

	/* .background {
		position: absolute;
		z-index: 99;

		background: ${p => p.theme.colors.background};
		width: 100%;
		height: 100%;

		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
	}

	@media (min-width: 1100px) {
		padding-right: 5rem;
	} */
`
