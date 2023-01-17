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
	}

	section#resume {
		.single-content {
			width: 30vw;
			min-width: 250px;
			margin: 0 auto;
		}
	}

	section#about-me {
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
