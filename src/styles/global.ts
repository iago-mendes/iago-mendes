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
`
