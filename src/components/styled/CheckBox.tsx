import styled from 'styled-components'

interface IProps {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Square = styled.div`
display: inline-block;
background: ${props => props.theme.colors.primary} ;
width: 14px;
height: 14px;
margin: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: transparent; 
  border-radius: 4px;
	border: 1px solid black;

	${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px  ${props => props.theme.colors.primary} ;
  }
	
  ${Square} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const CheckBox: React.FC<IProps> = ({ checked, ...props }) => {
	return (
		<CheckboxContainer>
			<HiddenCheckbox checked={checked} {...props} />
			<StyledCheckbox checked={checked}>
				<Square />
			</StyledCheckbox>
		</CheckboxContainer>
	);
};
export default CheckBox;