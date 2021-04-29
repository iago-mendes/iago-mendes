import styled from 'styled-components'

const Container = styled.div`
	header
	{
		display: flex;
		align-items: center;
		justify-content: space-around;

		padding: 1rem;
		border-bottom: ${p => p.theme.currentLine} 2px solid;
		margin-bottom: 1rem;

		.me
		{
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			h1
			{
				font-size: 3rem;
				font-family: Ubuntu;

				color: ${p => p.theme.cyan};
			}

			h2
			{
				font-size: 2rem;
				font-family: Ubuntu;

				color: ${p => p.theme.cyan};
			}
		}

		ul.info
		{
			width: 60%;

			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
			gap: 1rem;

			.field
			{
				display: flex;
				align-items: center;
				gap: 0.75rem;

				font-size: 1.5rem;

				display: flex;
			}
		}
	}

	section
	{
		padding: 0 3rem;

		h2
		{
			border-left: ${p => p.theme.foreground} 5px solid;
			padding-left: 1rem;
			margin-left: -2rem;
			margin-bottom: 1rem;

			font-size: 2rem;
		}
	}

	section#education
	{
		margin-bottom: 1.5rem;

		.group
		{
			display: flex;
			align-items: center;
			gap: 5rem;

			img
			{
				max-width: 4rem;
				max-height: 4rem;
			}

			h3
			{
				font-size: 2rem;
			}

			p, li
			{
				font-size: 1.5rem;
			}
		}
	}

	section#experiences
	{
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.experience
		{
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.header
			{
				display: flex;
				align-items: center;
				gap: 2rem;

				img
				{
					max-width: 3rem;
					max-height: 3rem;
				}

				h3
				{
					font-size: 1.75rem;
				}
			}

			.description
			{
				p
				{
					font-size: 1.25rem;
				}
			}

			ul.links
			{
				list-style: none;

				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
				gap: 1rem;

				li
				{
					display: grid;
					grid-template-columns: 1.5rem 1fr;
					gap: 1rem;

					font-size: 1.5rem;

					img
					{
						max-width: 1.5rem;
						max-height: 1.5rem;
					}

					a
					{
						word-break: break-all;
					}
				}
			}
		}
	}
`

export default Container