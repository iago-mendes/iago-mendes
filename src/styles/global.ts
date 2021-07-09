import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
	:root
	{
		font-size: 10px;
	}
	
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		-webkit-tap-highlight-color: transparent;
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
