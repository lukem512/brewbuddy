import styled, { css } from 'styled-components'

import * as Style from '../config/style'

const Label = styled.label`
  margin-right: ${Style.PADDING};
  white-space: nowrap;

  ${props => props.required && css`
    ::after {
      content: '*';
    }
  `}
`

export default Label
