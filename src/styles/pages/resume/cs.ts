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

	section
	{
		padding: 1rem;
		padding-left: 3rem;

		h2
		{
			border-left: ${p => p.theme.text} 5px solid;
			padding-left: 1rem;
			margin-left: -2rem;

			font-size: 2rem;
		}

		.verticalGroups
		{
			display: flex;
			gap: 5rem;

			margin-top: 0.5rem;

			.group
			{
				display: flex;
				flex-direction: column;
				gap: 0.25rem;

				h3
				{
					font-size: 1.75rem;
				}

				ul
				{
					list-style: none;

					display: flex;
					flex-direction: column;
					gap: 0.25rem;

					li
					{
						display: flex;
						align-items: center;
						gap: 1rem;

						img
						{
							max-width: 1.5rem;
							max-height: 1.5rem;
						}

						span
						{
							font-size: 1.5rem;
						}
					}
				}
			}
		}
	}
`

export default Container