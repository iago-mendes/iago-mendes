import styled from 'styled-components'

export const HomeContainer = styled.div`
	section {
		min-height: calc(95vh - 150px);
		padding: 2rem;

		> h2.title {
			font-size: 3rem;
			text-transform: uppercase;
			font-family: ${p => p.theme.fonts.title};
		}
	}

	section#hero {
		display: flex;
		justify-content: space-around;
		align-items: center;

		main {
			margin-bottom: 10rem;

			display: flex;
			flex-direction: column;
			gap: 2rem;

			h2 {
				font-size: 5rem;
				font-family: ${p => p.theme.fonts.title};
				text-transform: lowercase;
			}

			h3 {
				font-size: 2rem;
				text-transform: uppercase;
			}
		}
	}

	section#portfolio {
		background: ${p => p.theme.colors.cyan}80;
		color: ${p => p.theme.colors.background};
	}
`
