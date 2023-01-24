import {Link, withRouter} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiMoon, HiFire} from 'react-icons/hi'
import {BsSun} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  Navbar,
  Logo,
  NavItemsList,
  NavItem,
  NavItemProfileIcon,
  NavItemHamburgerIcon,
  NavItemLogoutButton,
  NavItemLogoutIcon,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  TriggerButton,
  LogoutIcon,
  CloseButton,
  NavMenuList,
  NavMenuItemContainer,
  NavMenuItem,
  NavMenuItemName,
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
          <Navbar theme={theme}>
            <Link to="/">
              <Logo
                src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${theme}-theme-img.png`}
                alt="website logo"
              />
            </Link>
            <NavItemsList>
              <NavItem key="themeButton">
                <ThemeButton
                  type="button"
                  onClick={changeTheme}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <BsSun style={{color: '#ffffff', fontSize: '30px'}} />
                  ) : (
                    <HiMoon style={{fontSize: '30px'}} />
                  )}
                </ThemeButton>
              </NavItem>
              <NavItemProfileIcon key="profileIcon">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavItemProfileIcon>
              <NavItemHamburgerIcon key="hamburgerMenu">
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
                      <NavMenuList>
                        <NavMenuItemContainer
                          key="home"
                          isActive={activeMenu === 'HOME'}
                          theme={theme}
                        >
                          <NavMenuItem>
                            <IconBox>
                              <AiFillHome
                                style={{
                                  color:
                                    activeMenu === 'HOME'
                                      ? '#ff0b37'
                                      : '#475569',
                                }}
                              />
                            </IconBox>
                            <NavMenuItemName
                              theme={theme}
                              isActive={activeMenu === 'HOME'}
                            >
                              <Link
                                to="/"
                                style={{
                                  textDecoration: 'none',
                                  outline: 'none',
                                  color: 'inherit',
                                }}
                              >
                                Home
                              </Link>
                            </NavMenuItemName>
                          </NavMenuItem>
                        </NavMenuItemContainer>
                        <NavMenuItemContainer
                          key="trending"
                          isActive={activeMenu === 'TRENDING'}
                          theme={theme}
                        >
                          <NavMenuItem>
                            <IconBox>
                              <HiFire
                                style={{
                                  color:
                                    activeMenu === 'TRENDING'
                                      ? '#ff0b37'
                                      : '#475569',
                                }}
                              />
                            </IconBox>
                            <NavMenuItemName
                              theme={theme}
                              isActive={activeMenu === 'TRENDING'}
                            >
                              <Link
                                to="/trending"
                                style={{
                                  textDecoration: 'none',
                                  outline: 'none',
                                  color: 'inherit',
                                }}
                              >
                                Trending
                              </Link>
                            </NavMenuItemName>
                          </NavMenuItem>
                        </NavMenuItemContainer>
                        <NavMenuItemContainer
                          key="gaming"
                          isActive={activeMenu === 'GAMING'}
                          theme={theme}
                        >
                          <NavMenuItem>
                            <IconBox>
                              <SiYoutubegaming
                                style={{
                                  color:
                                    activeMenu === 'GAMING'
                                      ? '#ff0b37'
                                      : '#475569',
                                }}
                              />
                            </IconBox>
                            <NavMenuItemName
                              theme={theme}
                              isActive={activeMenu === 'GAMING'}
                            >
                              <Link
                                to="/gaming"
                                style={{
                                  textDecoration: 'none',
                                  outline: 'none',
                                  color: 'inherit',
                                }}
                              >
                                Gaming
                              </Link>
                            </NavMenuItemName>
                          </NavMenuItem>
                        </NavMenuItemContainer>

                        <NavMenuItemContainer
                          key="savedVideos"
                          isActive={activeMenu === 'SAVED_VIDEOS'}
                          theme={theme}
                        >
                          <NavMenuItem>
                            <IconBox>
                              <MdPlaylistAdd
                                style={{
                                  color:
                                    activeMenu === 'SAVED_VIDEOS'
                                      ? '#ff0b37'
                                      : '#475569',
                                }}
                              />
                            </IconBox>
                            <NavMenuItemName
                              theme={theme}
                              isActive={activeMenu === 'SAVED_VIDEOS'}
                            >
                              <Link
                                to="/saved-videos"
                                style={{
                                  textDecoration: 'none',
                                  outline: 'none',
                                  color: 'inherit',
                                }}
                              >
                                Saved Videos
                              </Link>
                            </NavMenuItemName>
                          </NavMenuItem>
                        </NavMenuItemContainer>
                      </NavMenuList>
                    </ModalContainer>
                  )}
                </Popup>
              </NavItemHamburgerIcon>
              <NavItemLogoutButton key="logoutButton">
                <Popup
                  trigger={<LogoutButton type="button">Logout</LogoutButton>}
                  modal
                >
                  {close => renderLogoutPopup(theme, close)}
                </Popup>
              </NavItemLogoutButton>
              <NavItemLogoutIcon key="logoutIcon">
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
              </NavItemLogoutIcon>
            </NavItemsList>
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
