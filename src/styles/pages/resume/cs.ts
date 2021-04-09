import styled from 'styled-components'

const Container = styled.div`
	header
	{
		height: 20rem;
		background-color: ${p => p.theme.detailLight};

		display: flex;
		align-items: center;
		justify-content: space-around;

		.me
		{
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			.img
			{
				width: 11rem;
				height: 11rem;

				img
				{
					border-radius: 3rem;
				}
			}

			h1
			{
				font-size: 3rem;
				font-family: Permanent Marker;

				color: ${p => p.theme.detailStrong};
			}
		}

		.info
		{
			height: 75%;

			display: flex;
			flex-direction: column;
			gap: 0.75rem;

			h2
			{
				font-size: 2rem;
			}

			.field
			{
				display: flex;
				align-items: center;
				gap: 0.75rem;

				font-size: 1.5rem;

				display: flex;

				ul
				{
					list-style: none;
				}
			}
		}
	}
`

export default Container