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
		margin-bottom: 1.5rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		:last-of-type
		{
			margin: 0;
		}

		h2
		{
			border-left: ${p => p.theme.foreground} 5px solid;
			padding-left: 1rem;
			margin-left: -2rem;

			font-size: 2rem;
		}
	}

	section#technologies
	{
		ul
		{
			list-style: none;

			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
			gap: 1rem;

			li
			{
				display: grid;
				grid-template-columns: 1.5rem 1fr;
				gap: 0.25rem;
				align-items: center;

				font-size: 1.25rem;

				img
				{
					max-width: 1.25rem;
					max-height: 1.25rem;
				}
			}
		}
	}

	section#experiences
	{
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
				padding-left: 1rem;

				p
				{
					font-size: 1.25rem;
					text-align: justify;
				}
			}

			ul.links
			{
				list-style: none;

				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
				gap: 1rem;

				li
				{
					display: grid;
					grid-template-columns: 1.5rem 1fr;
					gap: 0.25rem;
					align-items: center;

					font-size: 1.25rem;

					img
					{
						max-width: 1.25rem;
						max-height: 1.25rem;
					}

					a
					{
						word-break: break-all;
					}
				}
			}
		}
	}

	section#education
	{
		.group
		{
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
			gap: 3rem;

			.college
			{
				display: flex;
				justify-content: space-around;

				img
				{
					max-width: 4rem;
					max-height: 4rem;
				}

				h3
				{
					font-size: 2rem;
				}
			}

			p, li
			{
				font-size: 1.5rem;
			}
		}
	}

	@media (max-width: 725px)
	{
		header
		{
			flex-direction: column;
			gap: 1rem;

			.me
			{
				width: 100%;

				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
				gap: 1rem;

				align-items: center;
				justify-items: center;
			}

			ul.info
			{
				width: 100%;
			}
		}
	}
`

export default Container