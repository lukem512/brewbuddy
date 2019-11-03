import React from 'react'
import styled from 'styled-components'

import * as Style from '../config/style'

const Container = styled.div`
  font-size: ${Style.TITLE_SIZE};
`

const PageTitle = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default PageTitle
