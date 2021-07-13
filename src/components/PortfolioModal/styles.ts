import {motion} from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
	width: 95vw;
	min-height: 50vh;
	background-color: ${p => p.theme.colors.background};

	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
	overflow: hidden;

	header {
		position: relative;

		.img {
			height: 20vh;
			overflow: hidden;

			::after {
				content: '';
				width: 100%;
				height: 20vh;

				position: absolute;
				top: 0;

				background: ${p =>
					`linear-gradient(${p.theme.colors.background}80, ${p.theme.colors.background})`};
				border-top-left-radius: 0.5rem;
				border-top-right-radius: 0.5rem;
			}
		}

		button.close {
			position: absolute;
			top: 1rem;
			right: 1rem;

			display: flex;
			align-items: center;
			justify-content: center;

			background: ${p => p.theme.colors.background};
			border: ${p => p.theme.colors.foreground} 2px solid;
			border-radius: 2rem;

			color: ${p => p.theme.colors.foreground};
			font-size: 1.5rem;
			padding: 0.25rem;

			transition: border-radius 0.25s;

			:hover {
				border-radius: 0;
			}
		}
	}
`
