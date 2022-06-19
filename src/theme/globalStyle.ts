import { createGlobalStyle } from "styled-components";
import HelveticaNeueBold_eot from '../fonts/HelveticaNeueCyr-Bold.eot';
import HelveticaNeueBold_ttf from '../fonts/HelveticaNeueCyr-Bold.ttf';
import HelveticaNeueBold_woff from '../fonts/HelveticaNeueCyr-Bold.woff';
import HelveticaNeueBold_woff2 from '../fonts/HelveticaNeueCyr-Bold.woff2';
import HelveticaNeueRegular_eot from '../fonts/HelveticaNeueCyr-Roman.eot';
import HelveticaNeueRegular_ttf from '../fonts/HelveticaNeueCyr-Roman.ttf';
import HelveticaNeueRegular_woff from '../fonts/HelveticaNeueCyr-Roman.woff';
import HelveticaNeueRegular_woff2 from '../fonts/HelveticaNeueCyr-Roman.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'HelveticaNeue';
	src: url(${HelveticaNeueBold_eot});
	src: local('HelveticaNeue Bold'), local('HelveticaNeue-Bold'),
		url(${HelveticaNeueBold_eot}?#iefix) format('embedded-opentype'),
		url(${HelveticaNeueBold_woff}) format('woff'),
		url(${HelveticaNeueBold_woff2}) format('woff2'),
		url(${HelveticaNeueBold_ttf}) format('truetype');
	font-weight: bold;
	font-style: normal;
	font-display: swap;
}
@font-face {
	font-family: 'HelveticaNeue';
	src: url(${HelveticaNeueRegular_eot});
	src: local('HelveticaNeue'), local('HelveticaNeue'),
		url(${HelveticaNeueRegular_eot}?#iefix) format('embedded-opentype'),
		url(${HelveticaNeueRegular_woff}) format('woff'),
		url(${HelveticaNeueRegular_woff2}) format('woff2'),
		url(${HelveticaNeueRegular_ttf}) format('truetype');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}
body {
	background-color: ${props => props.theme.colors.common.white};
	box-sizing: border-box;
	font-family: HelveticaNeue, Helvetica, Sans-Serif;
}
`;

export default GlobalStyle;