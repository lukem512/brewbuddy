import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const Page = props => (
  <Container>
    {props.children}
  </Container>
)

export default Page
