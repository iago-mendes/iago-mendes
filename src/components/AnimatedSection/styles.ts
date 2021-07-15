import styled from 'styled-components'

export const Container = styled.section`
	min-height: calc(95vh - 150px);
	padding: 2rem;
	overflow: hidden;

	:nth-of-type(even) {
		background: ${p => p.theme.colors.cyan}80;
		color: ${p => p.theme.colors.background};
	}

	> h2.title {
		text-transform: uppercase;
		font-family: ${p => p.theme.fonts.title};
	}

	> .content {
		margin-top: 2rem;
	}

	@media (min-width: 900px) {
		> .content {
			padding: 0 5rem;
		}
	}
`
