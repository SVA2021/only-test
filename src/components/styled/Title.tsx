import styled from 'styled-components'

const Title = styled.h1`
	margin: 0 auto;
	padding-top: 40px;
	text-align: center;
	text-transform: upperCase;
	font: bold 64px HelveticaNeue, Helvetica, Sans-Serif;
	color:  ${props => props.theme.colors.common.black};
`;

export default Title;