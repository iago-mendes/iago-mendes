import styled from 'styled-components'

export const Container = styled.div`
	width: fit-content;
	height: fit-content;

	margin: 0 auto;

	svg {
		overflow: visible;
		transform: scale(0.75);

		rect {
			fill: none;
			stroke: ${p => p.theme.colors.foreground};
		}

		circle {
			fill: ${p => p.theme.colors.foreground};

			animation: circleAnimation 1s infinite alternate-reverse;
		}

		@keyframes circleAnimation {
			from {
				transform: translateY(0px);
			}
			to {
				transform: translateY(40px);
			}
		}
	}
`
