import styled from 'styled-components'

const InputText = styled.input.attrs(props => ({
	// type: 'text' || 'password',
}))`
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  margin-top: 10px;
	padding: 20px;
	width: calc(100% - 40px);
	border: none;
	font-size: 16px;
	color: ${props => props.theme.colors.text.secondary};
	background: ${props => props.theme.colors.input};

	&:focus, &:hover {
		border: none;
		outline: none;
	}
`

export default InputText;