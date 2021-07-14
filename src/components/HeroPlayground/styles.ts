import styled from 'styled-components'

export const Container = styled.div`
	background: ${p => p.theme.colors.currentLine}80;
	width: 300px;
	height: 300px;
	border-radius: 10%;

	> div {
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			path {
				stroke-width: 1;
				stroke-linecap: round;
				stroke-linejoin: round;

				cursor: move;
			}
		}
	}
`
