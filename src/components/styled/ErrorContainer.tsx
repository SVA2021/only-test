import styled from 'styled-components'

const ErrorContainer = styled.p`
	border-radius:  ${props => props.theme.borderRadius};
	padding: 20px;
	font-size: 14px;
	border: 1px solid ${props => props.theme.colors.error.primary};
	color: ${props => props.theme.colors.common.black};
	background: ${props => props.theme.colors.error.background};
`

export default ErrorContainer;