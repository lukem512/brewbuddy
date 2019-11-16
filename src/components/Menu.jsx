import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MobileOnly from 'react-mobile-only'

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
  padding: ${Style.PADDING_SMALL} ${Style.PADDING} 0;
  border-bottom: 2px solid ${Colour.INFO_DARKER};
`

const MenuItemContainer = styled.div`
  margin-top: ${Style.PADDING};
  flex-wrap: wrap;

  @media (max-width: ${Style.MOBILE}) {
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: center;
  }
`

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
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

  :hover {
    color: ${Colour.INFO_DARKER};
    background-color: ${Colour.PRIMARY_LIGHTEST};
    border-left: 2px solid ${Colour.INFO_DARKEST};
  }

  @media (max-width: ${Style.MOBILE}  ) {
    border-left: none;
    border-radius: ${Style.BORDER_RADIUS};
    padding ${Style.PADDING_SMALL} ${Style.PADDING};

    :hover {
      border-left: none;
    }
  }
`

const TitleContainer = styled(Link)`
  text-decoration: none;
`

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  :focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: ${Colour.INFO_DARKER};
    border-radius: 10px;
    transition: all ${Style.TRANSITION};
    position: relative;
    transform-origin: 1px;
  }

  :hover {
    div {
      background: ${Colour.BLACK};
    }
  }
`

class MenuComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
  }

  toggleMenu(event) {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      <MenuContainer>
        <TitleBar>
          <TitleContainer to='/'>
            <Title>BrewBuddy</Title>
          </TitleContainer>
          <MobileOnly>
            <Hamburger onClick={this.toggleMenu.bind(this)}>
              <div />
              <div />
              <div />
            </Hamburger>
          </MobileOnly>
        </TitleBar>
        <MobileOnly>
          <MenuContainerBorder />
        </MobileOnly>
        <MenuItemContainer show={this.state.showMenu}>
          <MenuItem to='/hops'>Hops</MenuItem>
          <MenuItem to='/malts'>Malts</MenuItem>
          <MenuItem to='/ingredients'>Ingredients</MenuItem>
          <MenuItem to='/beers'>Beers</MenuItem>
        </MenuItemContainer>
      </MenuContainer>
    )
  }
}

export default MenuComponent
