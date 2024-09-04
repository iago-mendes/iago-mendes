import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	padding: 2rem;
	max-width: 75rem;
	margin: 0 auto;

	span {
		text-align: center;
	}

	> .header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		span.title {
			font-size: 2rem;
			font-weight: bold;
		}

		span.subtitle {
			font-size: 1.5rem;
		}
	}

	> .section {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;

		> span.title {
			font-size: 1.5rem;
			font-weight: bold;
		}

		> p {
			font-size: 1.25rem;
		}
	}
`
