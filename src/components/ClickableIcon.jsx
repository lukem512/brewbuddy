import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const ClickableIcon = styled(FontAwesomeIcon)`
  transition: all ${Style.TRANSITION};

  :hover {
    color: ${Colour.INFO};
  }
`

export default ClickableIcon
