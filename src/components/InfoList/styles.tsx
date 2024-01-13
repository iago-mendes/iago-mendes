import styled from 'styled-components'

export const Container = styled.ul`
	margin-left: 2em;

	li {
		font-size: 1.5em;
	}

	@media (max-width: 1350px) {
		li {
			font-size: 1.25em;
		}
	}
`
