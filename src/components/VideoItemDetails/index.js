import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'

import Header from '../Header'
import SideMenu from '../SideMenu'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemDetailsContainer,
  BodyContainer,
  VideoItemContentContainer,
  VideoDetailsItemContainer,
  TitleName,
  RowAlign,
  ViewsAndTimeline,
  ViewsCount,
  Dot,
  PublishedDate,
  LoaderContainer,
  RetryButton,
  LikeAndSaveButtons,
  ButtonContainer,
  CustomButton,
  ButtonLabel,
  ChannelLogoAndDetails,
  ChannelLogo,
  DetailsContainer,
  ChannelName,
  Subscribers,
  Description,
  DescriptionMobile,
  FailureViewContainer,
  FailureImage,
  FailureViewResponse,
  FailureDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    userAction: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      userAction: prevState.userAction === 'like' ? '' : 'like',
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      userAction: prevState.userAction === 'unlike' ? '' : 'unlike',
    }))
  }

  onClickSaveButton = () => {
    this.setState(prevState => ({
      saved: !prevState.saved,
    }))
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoDetails = data.video_details
      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: {...updatedData},
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoaderView = value => {
    const {isDarkTheme} = value
    const theme = isDarkTheme ? 'dark' : 'light'
    return (
      <LoaderContainer data-testid="loader">
        <Loader
          type="ThreeDots"
          color={theme === 'dark' ? '#ffffff' : '#4f46e5'}
          height="50"
          width="50"
        />
      </LoaderContainer>
    )
  }

  renderVideosDetailsView = value => {
    const {videoDetails, userAction} = this.state
    const {isDarkTheme, savedVideosList, saveVideo, removeVideo} = value
    const theme = isDarkTheme ? 'dark' : 'light'
    const isVideoSaved = savedVideosList.find(
      video => video.id === videoDetails.id,
    )
    const onClickSaveButton = () => {
      if (isVideoSaved === undefined) {
        saveVideo(videoDetails)
      } else {
        removeVideo(videoDetails.id)
      }
    }
    return (
      <>
        <ReactPlayer
          url={videoDetails.videoUrl}
          width="100%"
          height="60%"
          //   maxHeight="300px"
          controls
        />
        <VideoDetailsItemContainer>
          <TitleName theme={theme}>{videoDetails.title}</TitleName>
          <RowAlign>
            <ViewsAndTimeline>
              <ViewsCount>{videoDetails.viewCount} views</ViewsCount>
              <Dot>&#9679;</Dot>
              <PublishedDate>
                {formatDistanceToNow(new Date(videoDetails.publishedAt))}
              </PublishedDate>
            </ViewsAndTimeline>
            <LikeAndSaveButtons>
              <ButtonContainer>
                <CustomButton
                  id="likeButton"
                  type="button"
                  theme={theme}
                  isSelected={userAction === 'like' ? true : undefined}
                  onClick={this.onClickLikeButton}
                >
                  <BiLike />
                </CustomButton>
                <ButtonLabel
                  theme={theme}
                  htmlFor="likeButton"
                  isSelected={userAction === 'like' ? true : undefined}
                >
                  Like
                </ButtonLabel>
              </ButtonContainer>
              <ButtonContainer>
                <CustomButton
                  id="unlikeButton"
                  type="button"
                  theme={theme}
                  isSelected={userAction === 'unlike' ? true : undefined}
                  onClick={this.onClickDislikeButton}
                >
                  <BiDislike />
                </CustomButton>
                <ButtonLabel
                  theme={theme}
                  htmlFor="unlikeButton"
                  isSelected={userAction === 'unlike' ? true : undefined}
                >
                  Dislike
                </ButtonLabel>
              </ButtonContainer>
              <ButtonContainer>
                <CustomButton
                  id="saveButton"
                  type="button"
                  theme={theme}
                  isSelected={isVideoSaved !== undefined ? true : undefined}
                  onClick={onClickSaveButton}
                >
                  <MdPlaylistAdd />
                </CustomButton>
                <ButtonLabel
                  theme={theme}
                  htmlFor="saveButton"
                  isSelected={isVideoSaved !== undefined ? true : undefined}
                >
                  {isVideoSaved !== undefined ? 'saved' : 'save'}
                </ButtonLabel>
              </ButtonContainer>
            </LikeAndSaveButtons>
          </RowAlign>
          <ChannelLogoAndDetails theme={theme}>
            <ChannelLogo
              src={videoDetails.channel.profileImageUrl}
              alt="channel logo"
            />
            <DetailsContainer theme={theme}>
              <ChannelName>{videoDetails.channel.name}</ChannelName>
              <Subscribers>
                {videoDetails.channel.subscriberCount} subscribers
              </Subscribers>
              <Description theme={theme}>
                {videoDetails.description}
              </Description>
            </DetailsContainer>
          </ChannelLogoAndDetails>
          <DescriptionMobile theme={theme}>
            {videoDetails.description}
          </DescriptionMobile>
        </VideoDetailsItemContainer>
      </>
    )
  }

  renderFailureView = value => {
    const {isDarkTheme} = value
    const theme = isDarkTheme ? 'dark' : 'light'
    return (
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
  }

  renderResponse = value => {
    // console.log(theme)
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosDetailsView(value)
      case apiStatusConstants.failure:
        return this.renderFailureView(value)
      default:
        return this.renderLoaderView(value)
    }
  }

  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            const theme = isDarkTheme ? 'dark' : 'light'
            return (
              <VideoItemDetailsContainer
                data-testid="videoItemDetails"
                theme={theme}
              >
                <Header activeMenu="" />
                <BodyContainer>
                  <SideMenu theme={theme} activeMenu="" />
                  <VideoItemContentContainer theme={theme}>
                    {this.renderResponse(value)}
                  </VideoItemContentContainer>
                </BodyContainer>
              </VideoItemDetailsContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
