import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	grid-gap: 0.25em;

	margin-top: 0.25em;
	margin-left: 2.5em;

	p {
		font-size: 1.5em;
	}
`
