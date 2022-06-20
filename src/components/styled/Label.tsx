import styled from 'styled-components'

const Label = styled.label`
	display: inline-block;
	margin-top: 20px;
	font-size: 16px; 
	color: ${props => props.theme.colors.text.primary};
`;

export default Label;