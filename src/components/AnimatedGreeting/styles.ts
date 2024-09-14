import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	max-width: 30rem;
	height: 100%;
	padding-top: 20vh;

	span {
		font-size: 2rem;
		font-family: ${p => p.theme.fonts.code};

		&.small {
			font-size: 1.5rem;
		}
	}

	.cursor-blinker {
		display: inline-block;
		height: 2rem;
		width: 2px;
		background-color: ${p => p.theme.colors.foreground};
		transform: translateY(7px);
	}
`
