import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import Title from './components/styled/Title';
import Wrapper from './components/styled/Wrapper';
import GlobalStyle from './theme/globalStyle';
import theme from './theme/theme';

const App = () => {

	return (
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Title>Only.</Title>
					<Wrapper>
						<Main />
					</Wrapper>
				</ThemeProvider>
			</BrowserRouter>
	);
}

export default App;
