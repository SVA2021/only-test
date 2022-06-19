import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme/theme';

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<h1>some special text here</h1>
			</ThemeProvider>
		</>
	);
}

export default App;
