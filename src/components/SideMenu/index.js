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
          <Link to="/" style={{textDecoration: 'none', outline: 'none'}}>
            <MenuItem theme={theme} isActive={activeMenu === 'HOME'}>
              Home
            </MenuItem>
          </Link>
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
          <Link
            to="/trending"
            style={{textDecoration: 'none', outline: 'none'}}
          >
            <MenuItem theme={theme} isActive={activeMenu === 'TRENDING'}>
              Trending
            </MenuItem>
          </Link>
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
          <Link to="/gaming" style={{textDecoration: 'none', outline: 'none'}}>
            <MenuItem theme={theme} isActive={activeMenu === 'GAMING'}>
              Gaming
            </MenuItem>
          </Link>
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
          <Link
            to="/saved-videos"
            style={{textDecoration: 'none', outline: 'none'}}
          >
            <MenuItem theme={theme} isActive={activeMenu === 'SAVED_VIDEOS'}>
              Saved Videos
            </MenuItem>
          </Link>
        </MenuItemContainer>
      </NavItemsList>
      <ContactUsContainer>
        <ContactUsHeading theme={theme}>CONTACT US</ContactUsHeading>
        <IconsList>
          <Icon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <Icon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <Icon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </IconsList>
        <Note theme={theme}>
          Enjoy! Now to see your channels and recommendations!
        </Note>
      </ContactUsContainer>
    </NavContainer>
  )
}

export default SideMenu
