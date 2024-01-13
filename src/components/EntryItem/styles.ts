import styled from 'styled-components'

export const Container = styled.div`
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		h4,
		span {
			font-size: 1.5em;
			font-weight: bold;
		}
	}

	@media (max-width: 1350px) {
		.header {
			flex-direction: column;

			h4,
			span {
				font-size: 1.25em;
			}

			span {
				align-self: flex-end;
			}
		}
	}
`
