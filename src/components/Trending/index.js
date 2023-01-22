import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import SideMenu from '../SideMenu'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingContainer,
  TrendingContentContainer,
  BodyContainer,
  BannerContainer,
  MenuIconContainer,
  MenuHeading,
  VideosListContainer,
  VideoItemContainer,
  Thumbnail,
  LoaderContainer,
  VideoDetailsContainer,
  VideoDetailsContainerESM,
  VideoDetails,
  ChannelLogo,
  TitleName,
  ChannelName,
  ViewsAndTimeline,
  //   Views,
  Dot,
  //   TimeLine,
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

    const url = 'https://apis.ccbp.in/videos/trending'

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
        channel: {
          name: trendingVideo.channel.name,
          profileImageUrl: trendingVideo.channel.profile_image_url,
        },
        viewCount: trendingVideo.view_count,
        publishedAt: trendingVideo.published_at,
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
            <HiFire />
          </MenuIconContainer>
          <MenuHeading theme={theme}>Trending</MenuHeading>
        </BannerContainer>
        <VideosListContainer theme={theme}>
          {videosList.map(videoItem => (
            <Link
              key={videoItem.id}
              to={`/videos/${videoItem.id}`}
              style={{textDecoration: 'none'}}
            >
              <VideoItemContainer>
                <Thumbnail src={videoItem.thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <VideoDetails>
                    <TitleName theme={theme}>{videoItem.title}</TitleName>
                    <ChannelName>{videoItem.channel.name}</ChannelName>
                    <ViewsAndTimeline>
                      {videoItem.viewCount} Views
                      <Dot>&#9679;</Dot>
                      {formatDistanceToNow(new Date(videoItem.publishedAt))}
                    </ViewsAndTimeline>
                  </VideoDetails>
                </VideoDetailsContainer>
                <VideoDetailsContainerESM>
                  <ChannelLogo
                    src={videoItem.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <VideoDetails>
                    <TitleName theme={theme}>{videoItem.title}</TitleName>
                    <ViewsAndTimeline>
                      {videoItem.channel.name}
                      <Dot>&#9679;</Dot>
                      {videoItem.viewCount} Views
                      <Dot>&#9679;</Dot>
                      {formatDistanceToNow(new Date(videoItem.publishedAt))}
                    </ViewsAndTimeline>
                  </VideoDetails>
                </VideoDetailsContainerESM>
              </VideoItemContainer>
            </Link>
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
            <TrendingContainer data-testid="trending" theme={theme}>
              <Header activeMenu="TRENDING" />
              <BodyContainer>
                <SideMenu theme={theme} activeMenu="TRENDING" />
                <TrendingContentContainer theme={theme}>
                  {this.renderResponse(theme)}
                </TrendingContentContainer>
              </BodyContainer>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
