import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NavContainer,
  NavItemsList,
  MenuItemContainer,
  MenuItem,
  ContactUsContainer,
  ContactUsHeading,
  IconsList,
  IconItem,
  Icon,
  Note,
} from './styledComponents'

const SideMenu = props => {
  const {theme, activeMenu} = props
  return (
    <NavContainer theme={theme}>
      <NavItemsList>
        <MenuItemContainer
          key="home"
          isActive={activeMenu === 'HOME'}
          theme={theme}
        >
          <AiFillHome
            style={{
              color: activeMenu === 'HOME' ? '#ff0b37' : '#475569',
              fontSize: '20px',
              marginLeft: '25px',
            }}
          />
          <MenuItem theme={theme} isActive={activeMenu === 'HOME'}>
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
          </MenuItem>
        </MenuItemContainer>

        <MenuItemContainer
          key="trending"
          isActive={activeMenu === 'TRENDING'}
          theme={theme}
        >
          <HiFire
            style={{
              color: activeMenu === 'TRENDING' ? '#ff0b37' : '#475569',
              fontSize: '20px',
              marginLeft: '25px',
            }}
          />
          <MenuItem theme={theme} isActive={activeMenu === 'TRENDING'}>
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
          </MenuItem>
        </MenuItemContainer>

        <MenuItemContainer
          key="gaming"
          isActive={activeMenu === 'GAMING'}
          theme={theme}
        >
          <SiYoutubegaming
            style={{
              color: activeMenu === 'GAMING' ? '#ff0b37' : '#475569',
              fontSize: '20px',
              marginLeft: '25px',
            }}
          />
          <MenuItem theme={theme} isActive={activeMenu === 'GAMING'}>
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
          </MenuItem>
        </MenuItemContainer>
        <MenuItemContainer
          key="savedVideos"
          isActive={activeMenu === 'SAVED_VIDEOS'}
          theme={theme}
        >
          <MdPlaylistAdd
            style={{
              color: activeMenu === 'SAVED_VIDEOS' ? '#ff0b37' : '#475569',
              fontSize: '20px',
              marginLeft: '25px',
            }}
          />
          <MenuItem theme={theme} isActive={activeMenu === 'SAVED_VIDEOS'}>
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
          </MenuItem>
        </MenuItemContainer>
      </NavItemsList>
      <ContactUsContainer>
        <ContactUsHeading theme={theme}>CONTACT US</ContactUsHeading>
        <IconsList>
          <IconItem key="facebook">
            <Icon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
          </IconItem>
          <IconItem key="twitter">
            <Icon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
          </IconItem>
          <IconItem key="linkedin">
            <Icon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </IconItem>
        </IconsList>
        <Note theme={theme}>
          Enjoy! Now to see your channels and recommendations!
        </Note>
      </ContactUsContainer>
    </NavContainer>
  )
}

export default SideMenu
