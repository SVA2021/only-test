import React from 'react';
import styled from 'styled-components';
import Label from './Label';

interface IProps {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	labelWrap?: boolean;
	label?: string;
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
  transition: all 150ms;

	${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px  ${props => props.theme.colors.primary} ;
  }
	
  ${Square} {
    visibility: ${props => props.checked ? "visible" : "hidden"}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
	margin-right: 14px;
  vertical-align: middle;
`

const CheckBox: React.FC<IProps> = ({
	checked,
	labelWrap = true,
	label = 'checkbox',
	...props }) => {
	const content = (
		<CheckboxContainer >
			<HiddenCheckbox checked={checked} {...props} />
			<StyledCheckbox checked={checked}>
				<Square />
			</StyledCheckbox>
		</CheckboxContainer>
	);

	return labelWrap ? <Label>{content}{label}</Label> : <>{content}</>;
};

export default CheckBox;