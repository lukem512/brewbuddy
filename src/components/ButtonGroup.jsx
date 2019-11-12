import styled from 'styled-components'

import * as Style from '../config/style'

import Flex from './Flex'

const ButtonGroup = styled(Flex)`
  & > * {
    margin-right: ${Style.PADDING};
  }

  & > a {
    text-decoration: none;
  }
`

export default ButtonGroup
