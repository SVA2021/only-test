import styled from 'styled-components'

const Label = styled.label`
	font-size: 16px; 
	text-transform: capitalize;
	color: ${props => props.theme.colors.text.primary};
`;

export default Label;