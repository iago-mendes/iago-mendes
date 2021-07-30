import styled from 'styled-components'

export const Container = styled.div`
	ul {
		width: fit-content;
		margin: 1rem auto;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		li {
			width: 20rem;
			background-color: ${p => p.theme.colors.cyan};

			list-style: none;

			display: flex;
			align-items: center;
			gap: 1rem;

			padding: 1rem;
			border-radius: 0.5rem;

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

			span {
				color: ${p => p.theme.colors.background};
				font-family: ${p => p.theme.fonts.title};
				font-weight: 700;
				font-size: 1.25rem;
			}
		}
	}

	* {
		text-decoration: none;
	}
`
