import styled from 'styled-components'

export const Container = styled.footer`
	padding: 2.5rem 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2em;

	.links {
		width: 100%;

		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		align-items: center;
		justify-content: space-around;

		a {
			text-decoration: none;
			font-family: ${p => p.theme.fonts.title};
			font-weight: 700;
			font-size: 1.25rem;

			display: flex;
			flex-direction: column;
			align-items: center;

			::after {
				content: '';
				width: 0px;
				height: 2px;
				display: block;
				background: ${p => p.theme.colors.foreground};
				transition: 0.25s;
			}

			:hover::after {
				width: 100%;
			}
		}
	}

	.social > div {
		display: flex;
		align-items: center;
		gap: 0.25em;

		font-size: 1.25em;

		background-color: ${p => p.theme.colors.selection}40;
		padding: 0.25em 0.5em;
		border-radius: 0.25em;

		> a {
			width: 2em;
		}
	}
`
