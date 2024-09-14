import styled from 'styled-components'

export const Container = styled.div`
	> main {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		p {
			font-size: 2rem;
			font-family: ${p => p.theme.fonts.code};

			&.small {
				font-size: 1.5rem;
			}
		}
	}
`
