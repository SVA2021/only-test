import styled from 'styled-components'

const InputBase = styled.input.attrs(props => ({
}))`
  border-radius: ${props => props.theme.borderRadius};
	border: 1px solid transparent;
  display: block;
  margin-top: 10px;
	padding: 20px;
	width: calc(100% - 40px);
	font-size: 16px;
	color: ${props => props.theme.colors.text.secondary};
	background: ${props => props.theme.colors.input};

	&:focus, &:hover {
		outline: none;
	}
`

const InputText = styled(InputBase) <{ error: boolean }>`
	border-color: ${props => props.error ? props.theme.colors.error.primary : 'none'};

	&:focus, &:hover  {
	border-color: ${props => props.error ? props.theme.colors.error.primary : 'none'};
	}
`

export default InputText;