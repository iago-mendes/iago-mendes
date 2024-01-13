import styled from 'styled-components'

const figureSize = 15

export const Container = styled.div`
	display: flex;
	flex-direction: row;

	position: relative;

	min-height: 20rem;
	width: 100%;

	margin-bottom: 1em;

	figure {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;

		width: ${figureSize}em;

		display: flex;
		align-items: flex-start;

		overflow: hidden;
		border-top-left-radius: 1em;
		border-bottom-left-radius: 1em;

		mask-image: -webkit-gradient(
			linear,
			left top,
			right top,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			right top,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);

		img {
			object-fit: cover;
			object-position: left;
		}
	}

	aside {
		width: 100%;
		margin-left: ${figureSize + 2}em;

		h3 {
			font-size: 1.5em;
		}

		.content {
			margin-left: 2em;
		}
	}
`
