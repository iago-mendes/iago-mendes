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
`
