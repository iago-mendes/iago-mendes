import {motion} from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	width: 100vw;
	height: 100vh;
	overflow: hidden;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(3px);
`
