import {Link, withRouter} from 'react-router-dom'
import {MdPlaylistAdd, MdDarkMode} from 'react-icons/md'
import {CiLight} from 'react-icons/ci'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  Navbar,
  //   LinkElement,
  Logo,
  NavItems,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  NavBarMobile,
  TriggerButton,
  LogoutIcon,
  CloseButton,
  MenuList,
  MenuItemContainer,
  MenuItem,
  MenuItemName,
  ModalContainer,
  IconBox,
  LogoutPopupModal,
  LogoutModalContainer,
  LogoutNote,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => {
  const {activeMenu} = props

  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderLogoutPopup = (theme, close) => (
    <LogoutModalContainer>
      <LogoutPopupModal theme={theme}>
        <LogoutNote theme={theme}>Are you sure, you want to logout?</LogoutNote>
        <ButtonsContainer>
          <CancelButton type="button" theme={theme} onClick={() => close()}>
            Cancel
          </CancelButton>
          <ConfirmButton type="button" theme={theme} onClick={onClickLogout}>
            Confirm
          </ConfirmButton>
        </ButtonsContainer>
      </LogoutPopupModal>
    </LogoutModalContainer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <>
            <Navbar theme={theme}>
              <Link to="/">
                <Logo
                  src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${theme}-theme-img.png`}
                  alt="website logo"
                />
              </Link>
              <NavItems>
                <ThemeButton
                  type="button"
                  onClick={changeTheme}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <CiLight style={{color: '#ffffff', fontSize: '30px'}} />
                  ) : (
                    <MdDarkMode style={{fontSize: '30px'}} />
                  )}
                </ThemeButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  trigger={
                    <LogoutButton
                      type="button"
                      //   theme={theme}
                      //   onClick={onClickLogout}
                    >
                      Logout
                    </LogoutButton>
                  }
                  modal
                  //   position="center center"
                >
                  {close => renderLogoutPopup(theme, close)}
                </Popup>
              </NavItems>
            </Navbar>

            <NavBarMobile theme={theme}>
              <Link to="/">
                <Logo
                  src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${theme}-theme-img.png`}
                  alt="website logo"
                />
              </Link>
              <NavItems>
                <ThemeButton type="button" onClick={changeTheme}>
                  {isDarkTheme ? (
                    <CiLight style={{color: '#ffffff', fontSize: '30px'}} />
                  ) : (
                    <MdDarkMode style={{fontSize: '30px'}} />
                  )}
                </ThemeButton>
                <Popup
                  trigger={
                    <TriggerButton type="button">
                      <GiHamburgerMenu
                        style={{
                          fontSize: '30px',
                          color: theme === 'dark' ? '#ffffff' : '#000000',
                        }}
                      />
                    </TriggerButton>
                  }
                  modal
                >
                  {close => (
                    <ModalContainer theme={theme}>
                      <CloseButton
                        type="button"
                        theme={theme}
                        onClick={() => close()}
                      >
                        <AiOutlineClose />
                      </CloseButton>
                      <MenuList>
                        <Link
                          to="/"
                          style={{
                            textDecoration: 'none',
                            outline: 'none',
                            width: '100%',
                          }}
                        >
                          <MenuItemContainer
                            isActive={activeMenu === 'HOME'}
                            theme={theme}
                          >
                            <MenuItem>
                              <IconBox>
                                <AiFillHome
                                  style={{
                                    color:
                                      activeMenu === 'HOME'
                                        ? '#ff0b37'
                                        : '#475569',
                                    // fontSize: '20px',
                                    // marginLeft: '25px',
                                  }}
                                />
                              </IconBox>

                              <MenuItemName isActive={activeMenu === 'HOME'}>
                                Home
                              </MenuItemName>
                            </MenuItem>
                          </MenuItemContainer>
                        </Link>
                        <Link
                          to="/trending"
                          style={{
                            textDecoration: 'none',
                            outline: 'none',
                            width: '100%',
                          }}
                        >
                          <MenuItemContainer
                            isActive={activeMenu === 'TRENDING'}
                            theme={theme}
                          >
                            <MenuItem>
                              <IconBox>
                                <HiFire
                                  style={{
                                    color:
                                      activeMenu === 'TRENDING'
                                        ? '#ff0b37'
                                        : '#475569',
                                    // fontSize: '25px',
                                    // marginLeft: '20px',
                                  }}
                                />
                              </IconBox>
                              <MenuItemName
                                isActive={activeMenu === 'TRENDING'}
                              >
                                Trending
                              </MenuItemName>
                            </MenuItem>
                          </MenuItemContainer>
                        </Link>
                        <Link
                          to="/gaming"
                          style={{
                            textDecoration: 'none',
                            outline: 'none',
                            width: '100%',
                          }}
                        >
                          <MenuItemContainer
                            isActive={activeMenu === 'GAMING'}
                            theme={theme}
                          >
                            <MenuItem>
                              <IconBox>
                                <SiYoutubegaming
                                  style={{
                                    color:
                                      activeMenu === 'GAMING'
                                        ? '#ff0b37'
                                        : '#475569',
                                    // fontSize: '20px',
                                    // marginLeft: '25px',
                                  }}
                                />
                              </IconBox>
                              <MenuItemName isActive={activeMenu === 'GAMING'}>
                                Gaming
                              </MenuItemName>
                            </MenuItem>
                          </MenuItemContainer>
                        </Link>
                        <Link
                          to="/saved-videos"
                          style={{
                            textDecoration: 'none',
                            outline: 'none',
                            width: '100%',
                          }}
                        >
                          <MenuItemContainer
                            isActive={activeMenu === 'SAVED_VIDEOS'}
                            theme={theme}
                          >
                            <MenuItem>
                              <IconBox>
                                <MdPlaylistAdd
                                  style={{
                                    color:
                                      activeMenu === 'SAVED_VIDEOS'
                                        ? '#ff0b37'
                                        : '#475569',
                                    // fontSize: '20px',
                                    // marginLeft: '25px',
                                  }}
                                />
                              </IconBox>
                              <MenuItemName
                                isActive={activeMenu === 'SAVED_VIDEOS'}
                              >
                                Saved Videos
                              </MenuItemName>
                            </MenuItem>
                          </MenuItemContainer>
                        </Link>
                      </MenuList>
                    </ModalContainer>
                  )}
                </Popup>
                <Popup
                  trigger={
                    <LogoutIcon
                      type="button"
                      //   theme={theme}
                      //   onClick={onClickLogout}
                    >
                      <FiLogOut
                        style={{
                          fontSize: '30px',
                          color: theme === 'dark' ? '#ffffff' : '#000000',
                        }}
                      />
                    </LogoutIcon>
                  }
                  modal
                  //   position="center center"
                >
                  {close => renderLogoutPopup(theme, close)}
                </Popup>
              </NavItems>
            </NavBarMobile>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
