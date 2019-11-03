import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const MenuContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  min-width: 150px;
  flex-direction: column;
  padding: ${Style.PADDING};
  background-color: ${Colour.PRIMARY_LIGHTEST};
  border: 1px solid ${Colour.BORDER};
`

const Title = styled.div`
  color: ${Colour.INFO_DARKER};
  font-weight: bold;
  font-size: ${Style.TITLE_SIZE};
`

const MenuItem = styled(Link)`
  margin-top: ${Style.PADDING}
  font-weight: bold;
  display: block;
  text-decoration: none;
  color: ${Colour.BLACK};

  &:hover {
    color: ${Colour.INFO_DARKER};
  }
`

const TitleContainer = styled(Link)`
  text-decoration: none;
`

const Menu = () => (
  <MenuContainer>
    <TitleContainer to='/'>
      <Title>BrewBuddy</Title>
    </TitleContainer>
    <MenuItem to='/hops'>Hops</MenuItem>
    <MenuItem to='/malts'>Malts</MenuItem>
    <MenuItem to='/ingredients'>Ingredients</MenuItem>
    <MenuItem to='/beers'>Beers</MenuItem>
  </MenuContainer>
)

export default Menu
