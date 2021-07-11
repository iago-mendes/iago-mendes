import styled from 'styled-components'

export const HomeContainer = styled.div`
	section {
		min-height: calc(95vh - 150px);
		padding: 2rem;

		:nth-of-type(even) {
			background: ${p => p.theme.colors.cyan}80;
			color: ${p => p.theme.colors.background};
		}

		> h2.title {
			text-transform: uppercase;
			font-family: ${p => p.theme.fonts.title};
		}
	}

	section#hero {
		display: flex;
		justify-content: space-around;
		align-items: center;

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
`
