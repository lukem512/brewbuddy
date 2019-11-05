import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Flex = ({ onClick, style, children, ...rest }) => (
  <Container style={style} onClick={onClick} {...rest}>
    {children}
  </Container>
)

export default Flex
