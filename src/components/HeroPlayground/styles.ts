import styled from 'styled-components'

export const Container = styled.div`
	background: ${p => p.theme.colors.currentLine}80;
	width: 400px;
	height: 400px;
	border-radius: 10%;

	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		path {
			stroke-width: 1;
			stroke-linecap: round;
			stroke-linejoin: round;
		}
	}
`
