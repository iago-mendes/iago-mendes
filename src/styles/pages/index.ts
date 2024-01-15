import styled from 'styled-components'

export const HomeContainer = styled.div`
	section#hero {
		display: flex;
		justify-content: space-around;
		align-items: center;

		height: calc(95vh - 150px);
		padding: 2rem;

		> main {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			h2 {
				font-size: 3rem;
				font-family: ${p => p.theme.fonts.title};
				text-transform: lowercase;
			}

			h3 {
				text-transform: uppercase;
				color: ${p => p.theme.colors.purple};
			}
		}

		> .background {
			position: absolute;
			z-index: -1;

			height: calc(95vh - 150px);
			overflow: hidden;

			display: flex;
			align-items: center;
			justify-content: center;

			&::before {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				content: '';
				display: block;
				height: 100%;
				width: 100%;
				background: ${p => `linear-gradient(
					to top,
					${p.theme.colors.background}E6,
					${p.theme.colors.background}
				)`};
			}
		}
	}

	section#resume {
		.list {
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;
			gap: 2em;

			> div {
				width: 30vw;
				height: 15vw;
				min-width: 250px;
				min-height: 150px;
			}
		}
	}

	section#about {
		figure {
			width: 15rem;
			height: 15rem;
			margin: 1rem auto;

			border-radius: 30%;
			overflow: hidden;
			cursor: cell;

			@media (min-width: 400px) {
				width: 20rem;
				height: 20rem;
			}

			@media (min-width: 900px) {
				float: right;
				margin: 1rem;
			}
		}

		p {
			color: ${p => p.theme.colors.background};
			font-size: 1.5rem;

			margin-bottom: 0.5rem;
			text-indent: 1.5rem;

			a,
			strong {
				font-family: ${p => p.theme.fonts.title};
				transition: color 0.2s;
				font-weight: bold;

				:hover {
					color: ${p => p.theme.colors.cyan};
				}
			}
		}
	}
`
