import styled from 'styled-components'

export const Container = styled.footer`
	padding: 2.5rem 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	a {
		text-decoration: none;
		font-family: ${p => p.theme.fonts.title};
		font-weight: 700;
		font-size: 1rem;

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

		svg {
			font-size: 0.8rem;
		}
	}
`
