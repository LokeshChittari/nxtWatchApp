import {HiFire} from 'react-icons/hi'
// import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
// import Loader from 'react-loader-spinner'

import SideMenu from '../SideMenu'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosContainer,
  BodyContainer,
  SavedVideosContentContainer,
  BannerContainer,
  MenuIconContainer,
  MenuHeading,
  VideosListContainer,
  VideoItemContainer,
  Thumbnail,
  VideoDetailsContainer,
  VideoDetailsContainerESM,
  VideoDetails,
  TitleName,
  ChannelName,
  ChannelLogo,
  ViewsAndTimeline,
  //   Views,
  Dot,
  //   TimeLine,
  FailureViewContainer,
  FailureImage,
  FailureViewResponse,
  FailureDescription,
} from './styledComponents'

const SavedVideos = () => {
  const renderVideosListView = (theme, savedVideosList) => (
    <>
      <BannerContainer theme={theme} data-testid="banner">
        <MenuIconContainer theme={theme}>
          <HiFire />
        </MenuIconContainer>
        <MenuHeading theme={theme}>Trending</MenuHeading>
      </BannerContainer>
      <VideosListContainer theme={theme}>
        {savedVideosList.map(videoItem => (
          <Link
            key={videoItem.id}
            to={`/videos/${videoItem.id}`}
            style={{textDecoration: 'none'}}
          >
            <VideoItemContainer>
              <Thumbnail src={videoItem.thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                {/* <VideoDetails> */}
                <TitleName theme={theme}>{videoItem.title}</TitleName>
                <ChannelName>{videoItem.channel.name}</ChannelName>
                <ViewsAndTimeline>
                  {videoItem.viewCount} Views
                  <Dot>&#9679;</Dot>
                  {formatDistanceToNow(new Date(videoItem.publishedAt))}
                </ViewsAndTimeline>
                {/* </VideoDetails> */}
              </VideoDetailsContainer>
            </VideoItemContainer>
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
        ))}
      </VideosListContainer>
    </>
  )

  const renderFailureView = theme => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <FailureViewResponse theme={theme}>
        No saved videos found
      </FailureViewResponse>
      <FailureDescription>
        you can save your videos while watching them
      </FailureDescription>
    </FailureViewContainer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <SavedVideosContainer data-testid="savedVideos" theme={theme}>
            <Header activeMenu="SAVED_VIDEOS" />
            <BodyContainer>
              <SideMenu theme={theme} activeMenu="SAVED_VIDEOS" />
              <SavedVideosContentContainer theme={theme}>
                {savedVideosList.length > 0
                  ? renderVideosListView(theme, savedVideosList)
                  : renderFailureView(theme)}
              </SavedVideosContentContainer>
            </BodyContainer>
          </SavedVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
