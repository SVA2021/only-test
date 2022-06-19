import styled from 'styled-components'

const WarningIcon = styled.span`
  border-radius: 50%;
	border: none;
	display: inline-block;
	width: 20px;
	height: 20px;
	margin-right: 1em;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	color: ${props => props.theme.colors.error.secondary};
	background: ${props => props.theme.colors.error.pink};
`

export default WarningIcon;