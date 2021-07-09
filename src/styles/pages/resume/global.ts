import styled from 'styled-components'

const Container = styled.div`
	section {
		padding: 0 3rem;
		margin-bottom: 1.5rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		:last-of-type {
			margin: 0;
		}

		h2 {
			border-left: ${p => p.theme.colors.foreground} 5px solid;
			padding-left: 1rem;
			margin-left: -2rem;

			font-size: 2rem;
		}
	}

	section#technologies {
		ul {
			list-style: none;

			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
			gap: 1rem;

			li {
				display: grid;
				grid-template-columns: 1.5rem 1fr;
				gap: 0.25rem;
				align-items: center;

				font-size: 1.25rem;

				img {
					max-width: 1.25rem;
					max-height: 1.25rem;
				}
			}
		}
	}

	section.experiences {
		.experience {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.header {
				display: flex;
				align-items: center;
				gap: 2rem;

				img {
					max-width: 3rem;
					max-height: 3rem;
				}

				h3 {
					font-size: 1.75rem;
					white-space: nowrap;
				}

				ul.links {
					list-style: none;
					/* width: 100%; */
					/* margin-left: auto; */

					display: grid;
					gap: 1rem;
					/* grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr)); */
					grid-template-columns: 1fr 1fr;

					li {
						display: grid;
						grid-template-columns: 1.5rem 1fr;
						gap: 0.25rem;
						align-items: center;

						font-size: 1.25rem;

						img {
							max-width: 1.25rem;
							max-height: 1.25rem;
						}

						a {
							word-break: break-all;
						}
					}
				}
			}

			ul.description {
				padding-left: 2rem;

				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
				gap: 0.5rem;

				li {
					font-size: 1.25rem;
					padding-right: 1.5rem;

					strong {
						font-style: italic;
					}
				}
			}
		}
	}

	section#education {
		.group {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
			gap: 3rem;

			.college {
				display: flex;
				justify-content: space-around;

				img {
					max-width: 4rem;
					max-height: 4rem;
				}

				h3 {
					font-size: 2rem;
				}
			}

			p,
			li {
				font-size: 1.5rem;
			}
		}
	}

	@media (max-width: 725px) {
		header {
			flex-direction: column;
			gap: 1rem;

			.me {
				width: 100%;

				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
				gap: 1rem;

				align-items: center;
				justify-items: center;
			}

			ul.info {
				width: 100%;
			}
		}
	}
`

export default Container
