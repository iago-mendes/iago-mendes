import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
`

export const Callout = styled(motion.div)`
	overflow: hidden;
	position: absolute;
	top: -3px;
	z-index: 1;

	display: flex;
	flex-direction: column;
	align-items: center;

	.detail {
		margin: 0 auto;
		color: ${p => p.theme.colors.selection};

		font-size: 1rem;
	}

	.content {
		background: ${p => p.theme.colors.selection};
		padding: 0.5rem 1.5rem;
		border-radius: 0.5rem;
		margin-top: -12px;

		display: flex;
		align-items: center;
		justify-content: center;

		span {
			white-space: nowrap;
			font-weight: 700;

			font-size: 1rem;
			color: ${p => p.theme.colors.foreground};
		}
	}
`
