import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string;
    colors: {
			common: {
				white: string
				black: string
			}
      primary: string
      secondary: string
			text: {
				primary: string
				secondary: string
			}
			error: {
				primary: string
				secondary: string
			}
			disabled: string
			body: string
			input: string
    }
  }
}