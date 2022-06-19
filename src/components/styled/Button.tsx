import styled from 'styled-components'

type TButton = {
	fullWidth?: boolean
	primary?: boolean
	size?: string
};

const Button = styled.button<TButton>`
  border-radius:  ${props => props.theme.borderRadius};
  display: block;
  margin: 10px auto;
	padding: 1rem;
	height: 60px;
	width: ${props => props.size || (props.fullWidth ? '100%' : 'auto')};
	border: none;
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;
	color: ${props => props.primary ? props.theme.colors.common.white : props.theme.colors.common.black};
	background: ${props => props.disabled ? props.theme.colors.disabled :
		props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
`

export default Button;