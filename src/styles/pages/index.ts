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

	section#about-me {
		figure {
			width: 20rem;
			max-width: calc(100% - 2rem);
			margin: 1rem auto;

			border-radius: 25%;
			overflow: hidden;
		}

		p {
			color: ${p => p.theme.colors.background};
			font-size: 1.5rem;

			margin-bottom: 0.5rem;
			text-indent: 1.5rem;

			strong {
				font-family: ${p => p.theme.fonts.title};
				transition: color 0.2s;

				:hover {
					color: ${p => p.theme.colors.cyan};
				}
			}
		}

		@media (min-width: 900px) {
			figure {
				float: right;
				margin: 1rem;
			}
		}
	}
`
