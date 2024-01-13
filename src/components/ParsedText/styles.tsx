import styled from 'styled-components'

export const Container = styled.div`
	text-align: left;

	a,
	strong {
		font-family: ${p => p.theme.fonts.title};
		transition: color 0.2s;
		font-weight: bold;

		:hover {
			color: ${p => p.theme.colors.cyan};
		}
	}
`
