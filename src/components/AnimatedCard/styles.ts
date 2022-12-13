import {motion} from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.li)`
	list-style: none;
	cursor: pointer;

	:hover .card {
		transform: scale(0.8);

		.background {
			border-radius: 0;
		}
	}

	.card {
		transition: transform 0.2s;
		height: 100%;

		.background {
			position: relative;
			z-index: 0;
			height: 100%;

			border-radius: 0.5rem;
			overflow: hidden;

			transition: border-radius 0.2s;

			.img {
				z-index: -1;
				height: 100%;

				div {
					height: 100%;
				}
			}

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
		}
	}
`
