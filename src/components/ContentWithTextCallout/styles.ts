import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
`

export const Callout = styled(motion.div)`
	position: absolute;
	top: 100%;

	overflow: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;

	.detail {
		margin: 0 auto;
		color: ${p => p.theme.colors.selection};
	}

	.content {
		background: ${p => p.theme.colors.selection};
		padding: 0.2rem 1rem;
		border-radius: 0.5rem;
		margin-top: -10px;

		span {
			white-space: nowrap;
			font-weight: 700;
		}
	}
`
