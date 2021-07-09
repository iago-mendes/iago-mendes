import styled from 'styled-components'

const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;

	padding: 1rem;
	border-bottom: ${p => p.theme.currentLine} 2px solid;
	margin-bottom: 1rem;

	.me {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		h1 {
			font-size: 3rem;
			font-family: Ubuntu;

			color: ${p => p.theme.cyan};
		}

		h2 {
			font-size: 2rem;
			font-family: Ubuntu;

			color: ${p => p.theme.cyan};
		}
	}

	ul.info {
		width: 60%;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 1rem;

		.field {
			display: flex;
			align-items: center;
			gap: 0.75rem;

			font-size: 1.5rem;

			display: flex;
		}
	}
`

export default Container
