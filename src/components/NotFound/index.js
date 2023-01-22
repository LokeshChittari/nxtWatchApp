import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideMenu from '../SideMenu'

import {
  NotFoundContainer,
  BodyContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundPageResponse,
  NotFoundPageDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <NotFoundContainer theme={theme}>
          <Header activeMenu="" />
          <BodyContainer>
            <SideMenu theme={theme} activeMenu="" />
            <NotFoundContentContainer>
              <NotFoundImage
                src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${theme}-theme-img.png`}
              />
              <NotFoundPageResponse theme={theme}>
                Page Not Found
              </NotFoundPageResponse>
              <NotFoundPageDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundPageDescription>
            </NotFoundContentContainer>
          </BodyContainer>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
