import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import SideMenu from '../SideMenu'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingContainer,
  BodyContainer,
  BannerContainer,
  MenuIconContainer,
  MenuHeading,
  VideosListContainer,
  VideoItemContainer,
  Thumbnail,
  LoaderContainer,
  VideoDetailsContainer,
  VideoDetails,
  TitleName,
  Views,
  FailureViewContainer,
  FailureImage,
  FailureViewResponse,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  onClickRetry = () => {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(trendingVideo => ({
        id: trendingVideo.id,
        title: trendingVideo.title,
        thumbnailUrl: trendingVideo.thumbnail_url,
        viewCount: trendingVideo.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoaderView = theme => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={theme === 'dark' ? '#ffffff' : '#4f46e5'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderVideosListView = theme => {
    const {videosList} = this.state

    return (
      <>
        <BannerContainer theme={theme} data-testid="banner">
          <MenuIconContainer theme={theme}>
            <SiYoutubegaming />
          </MenuIconContainer>
          <MenuHeading theme={theme}>Gaming</MenuHeading>
        </BannerContainer>
        <VideosListContainer theme={theme}>
          {videosList.map(videoItem => (
            <VideoItemContainer key={videoItem.id}>
              <Link
                to={`/videos/${videoItem.id}`}
                style={{textDecoration: 'none'}}
              >
                <Thumbnail src={videoItem.thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <VideoDetails>
                    <TitleName theme={theme}>{videoItem.title}</TitleName>
                    <Views>{videoItem.viewCount} Watching Worldwide</Views>
                  </VideoDetails>
                </VideoDetailsContainer>
              </Link>
            </VideoItemContainer>
          ))}
        </VideosListContainer>
      </>
    )
  }

  renderFailureView = theme => (
    <FailureViewContainer>
      <FailureImage
        src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${theme}-theme-img.png`}
        alt="failure view"
      />
      <FailureViewResponse theme={theme}>
        Oops! Something Went Wrong
      </FailureViewResponse>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderResponse = theme => {
    // console.log(theme)
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView(theme)
      case apiStatusConstants.failure:
        return this.renderFailureView(theme)
      default:
        return this.renderLoaderView(theme)
    }
  }

  render() {
    // const {activeMenu} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <>
              <Header activeMenu="GAMING" />
              <TrendingContainer theme={theme} data-testid="gaming">
                <SideMenu theme={theme} activeMenu="GAMING" />
                <BodyContainer theme={theme}>
                  {this.renderResponse(theme)}
                </BodyContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
