import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
	@media(max-width: 1100px)
	{
		html
		{
			font-size: 93.75%;
		}
	}

	@media(max-width: 900px)
	{
		html
		{
			font-size: 87.5%;
		}
	}
	
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		-webkit-tap-highlight-color: transparent;
	}

	html {
		scroll-behavior: smooth;
		scroll-padding-top: 50px;
	}
	
	body
	{
		background-color: ${p => p.theme.colors.background};
		color: ${p => p.theme.colors.foreground};

		overflow-x: hidden;
	}

	body.avoid-scroll {
		height: 100vh;
		overflow-y: hidden;

		@media (min-width: 900px) {
			padding-right: 15px;
		}
	}
	
	body, input, textarea, button
	{
		font-family: ${p => p.theme.fonts.text};
	}
	
	button
	{
		cursor: pointer;
	}
	
	a
	{
		color: inherit;
	}
	
	#__next
	{}

	@media (min-width: 900px) {
		* {
			::-webkit-scrollbar
			{
				width: 15px;
			}
			::-webkit-scrollbar-track
			{
				background-color: ${p => p.theme.colors.selection}40;
			}
			
			::-webkit-scrollbar-thumb
			{
				background-color: ${p => p.theme.colors.foreground}80;

				:hover
				{
					background-color: ${p => p.theme.colors.foreground}40;
				}
			}
		}
	}
`
