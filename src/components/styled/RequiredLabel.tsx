import styled from 'styled-components'

const RequiredLabel = styled.span`
	display: inline-block;
	font-size: 14px;
	color: ${props => props.theme.colors.error.primary};
`

export default RequiredLabel;