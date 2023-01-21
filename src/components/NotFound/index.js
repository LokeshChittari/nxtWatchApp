import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideMenu from '../SideMenu'

import {
  NotFoundContainer,
  BodyContainer,
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
        <>
          <Header activeMenu="" />
          <NotFoundContainer theme={theme}>
            <SideMenu theme={theme} activeMenu="" />
            <BodyContainer>
              <NotFoundImage
                src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${theme}-theme-img.png`}
              />
              <NotFoundPageResponse theme={theme}>
                Page Not Found
              </NotFoundPageResponse>
              <NotFoundPageDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundPageDescription>
            </BodyContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
