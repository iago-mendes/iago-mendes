import {motion} from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
	width: 95vw;
	height: 75vh;

	background-color: ${p => p.theme.colors.background};
	color: ${p => p.theme.colors.foreground};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);

	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
	overflow-y: auto;

	header {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		overflow-x: hidden;
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

	.details {
		padding: 0 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		.titles {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			h3 {
				font-family: ${p => p.theme.fonts.title};
				font-size: 2rem;
			}
		}

		span.dates {
			margin-left: auto;
			font-family: ${p => p.theme.fonts.title};
			font-weight: 700;
		}
	}

	.links {
		padding: 0.5rem 2rem;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		gap: 0.5rem;
	}

	.description {
		padding: 1rem;
	}

	ul.descriptionItems {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		padding: 0 1rem;
		padding-left: 2.5rem;
		margin-bottom: 5rem;
	}

	@media (min-width: 900px) {
		width: 50vw;

		.details {
			flex-direction: row;
		}
	}
`
