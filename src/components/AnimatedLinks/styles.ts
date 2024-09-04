import styled from 'styled-components'

export const Container = styled.ul`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	grid-gap: 0.5rem;
	justify-items: center;

	* {
		text-decoration: none;
	}

	li {
		width: 20rem;
		background-color: ${p => p.theme.colors.cyan};

		list-style: none;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		padding: 1rem;
		border-radius: 0.5rem;

		&.disabled {
			background-color: ${p => p.theme.colors.currentLine};
			cursor: not-allowed;
		}

		figure {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 2rem;
			height: 2rem;

			img {
				max-width: 100%;
				max-height: 100%;
			}
		}

		span,
		svg {
			color: ${p => p.theme.colors.background};
			font-family: ${p => p.theme.fonts.title};
			font-weight: 700;
			font-size: 1.25rem;
		}
	}
`
