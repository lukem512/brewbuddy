import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const MenuContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  padding: ${Style.PADDING_LARGE};
  padding-right: ${Style.PADDING};

  @media (max-width: ${Style.MOBILE}) {
    height: auto;
    min-height: auto;
    flex-direction: row;
    padding: ${Style.PADDING} ${Style.PADDING_LARGE} 0;
  }
`

const MenuContainerBorder = styled.div`
  @media (max-width: ${Style.MOBILE}) {
    padding: ${Style.PADDING_SMALL} ${Style.PADDING} 0;
    border-bottom: 2px solid ${Colour.INFO_DARKER};
  }
`

const MenuItemContainer = styled.div`
  margin-top: ${Style.PADDING};

  @media (max-width: ${Style.MOBILE}) {
    display: none;
  }
`

const Title = styled.div`
  color: ${Colour.INFO_DARKER};
  font-weight: 500;
  font-size: ${Style.TITLE_SIZE};
`

const MenuItem = styled(Link)`
  padding: ${Style.PADDING_SMALL};
  padding-left: ${Style.PADDING};
  display: block;
  text-decoration: none;
  color: ${Colour.BLACK};
  border-left: 2px solid ${Colour.INFO_DARKER};

  &:hover {
    color: ${Colour.INFO_DARKER};
    background-color: ${Colour.PRIMARY_LIGHTEST};
    border-left: 2px solid ${Colour.INFO_DARKEST};
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
      <MenuContainerBorder />
      <MenuItemContainer>
        <MenuItem to='/hops'>Hops</MenuItem>
        <MenuItem to='/malts'>Malts</MenuItem>
        <MenuItem to='/ingredients'>Ingredients</MenuItem>
        <MenuItem to='/beers'>Beers</MenuItem>
      </MenuItemContainer>
  </MenuContainer>
)

export default Menu
