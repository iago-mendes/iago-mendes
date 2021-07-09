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
		padding: 0.5rem 1.5rem;
		border-radius: 0.5rem;
		margin-top: -5px;

		span {
			white-space: nowrap;
			font-size: 1.5rem;
			font-weight: 700;
		}
	}
`
