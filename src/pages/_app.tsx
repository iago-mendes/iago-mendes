import {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import {SEOHead} from '../components/SEOHead'
import {Menu} from '../components/Menu'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
	return (
		<ThemeProvider theme={theme}>
			<SEOHead />
			<Menu />
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default MyApp
