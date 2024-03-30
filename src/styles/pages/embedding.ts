import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 2rem;
	/* padding-top: 2rem; */
	max-width: 75rem;
	margin: 0 auto;

	span.title {
		font-size: 2rem;
		font-weight: bold;

		margin-bottom: 1rem;
	}

	span.authors {
		font-size: 1.75rem;

		margin-bottom: 1rem;
	}

	p.description {
		font-size: 1.5rem;
		/* text-align: justify; */
	}

	span.links {
		font-size: 1.75rem;
		font-weight: bold;

		margin-top: 1rem;
	}
`
