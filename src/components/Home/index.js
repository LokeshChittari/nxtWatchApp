import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import Header from '../Header'
import SideMenu from '../SideMenu'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  BodyContainer,
  HomeContentContainer,
  BannerContainer,
  CloseButton,
  LogoContainer,
  Logo,
  Description,
  CustomButton,
  VideosListContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  VideoItem,
  Thumbnail,
  VideoDetailsContainer,
  VideoDetailsContainerESM,
  ChannelLogo,
  VideoDetails,
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
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  hideBanner = () => {
    this.setState(prevState => ({
      showBanner: !prevState.showBanner,
    }))
  }

  onClickRetry = () => {
    this.getVideosList()
  }

  onEnterSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onClickSearch = () => {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(videoDetails => ({
        id: videoDetails.id,
        title: videoDetails.title,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
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

  renderNoResponseView = theme => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureViewResponse theme={theme}>
        No Search results found
      </FailureViewResponse>
      <FailureDescription>
        Try different key words or remove search filter
      </FailureDescription>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderVideosListView = theme => {
    const {videosList} = this.state
    if (videosList.length <= 0) {
      return this.renderNoResponseView(theme)
    }
    return (
      <VideosList>
        {videosList.map(videoItem => (
          <VideoItem key={videoItem.id}>
            <Link
              to={`/videos/${videoItem.id}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <Thumbnail src={videoItem.thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo
                  src={videoItem.channel.profileImageUrl}
                  alt="channel logo"
                />
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
            </Link>
          </VideoItem>
        ))}
      </VideosList>
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
    const {showBanner, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <HomeContainer data-testid="home" theme={theme}>
              <Header activeMenu="HOME" />
              <BodyContainer>
                <SideMenu theme={theme} activeMenu="HOME" />
                <HomeContentContainer theme={theme}>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <LogoContainer>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                        />

                        <CloseButton
                          type="button"
                          onClick={this.hideBanner}
                          data-testid="close"
                        >
                          <AiOutlineClose style={{fontSize: '20px'}} />
                        </CloseButton>
                      </LogoContainer>

                      <Description>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </Description>
                      <CustomButton type="button">GET IT NOW</CustomButton>
                    </BannerContainer>
                  )}
                  <VideosListContainer>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onEnterSearchInput}
                        theme={theme}
                      />
                      <SearchButton
                        type="button"
                        theme={theme}
                        value={searchInput}
                        onClick={this.onClickSearch}
                        data-testid="search"
                      >
                        <AiOutlineSearch
                          style={{
                            fontSize: '20px',
                            color: isDarkTheme ? '#7e858e' : '#000000',
                          }}
                        />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderResponse(theme)}
                  </VideosListContainer>
                </HomeContentContainer>
              </BodyContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
