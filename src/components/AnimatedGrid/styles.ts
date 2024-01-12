import styled from 'styled-components'

export const Container = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(22.5rem, 1fr));
	grid-auto-rows: 14rem;
	grid-gap: 1rem;

	@media (max-width: 700px) {
		grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
	}
`
