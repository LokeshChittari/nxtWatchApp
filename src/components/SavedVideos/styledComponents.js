import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 91.5vh;
`

export const SavedVideosContentContainer = styled.div`
  width: 100%;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f1f1f1'};
  @media screen and (min-width: 576px) {
    padding: 35px;
  }
`

export const MenuIconContainer = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#cbd5e1'};
  border-radius: 50%;
  color: #ff0b37;
  font-size: 24px;
  @media screen and (min-width: 576px) {
    height: 80px;
    width: 80px;
    font-size: 30px;
  }
`

export const MenuHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  margin-left: 25px;
`

export const VideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  @media screen and (min-width: 576px) {
    padding-left: 35px;
  }
`
export const VideoItemContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  //   height: 300px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 280px;
    margin-right: 30px;
    // margin-bottom: 30px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
    width: 100%;
  }
`

export const VideoDetailsContainerESM = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-left: 10px;
  margin-top: 20px;
  padding-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  //   margin-top: 10px;
  margin-right: 10px;
`

export const VideoDetails = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   color: default;
`

export const TitleName = styled.p`
    font-family:'Roboto'
    font-size:12px;
    color:${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
    margin-top:0;
    font-weight:500;
    // margin-bottom:0;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
  font-size: 14px;
`
export const ViewsAndTimeline = styled.div`
  font-family: 'Roboto';
  color: #475569;
`

export const Dot = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 8px;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`
export const FailureViewContainer = styled.div`
  height: 91.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImage = styled.img`
  width: 80%;
  margin-top: 30px;
  @media screen and (min-width: 576px) {
    width: 450px;
  }
`
export const FailureViewResponse = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-weight: bold;
  text-align: center;
  width: 80%;
`
export const RetryButton = styled.button`
  border-width: 0;
  background-color: #3b82f6;
  border-radius: 5px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  width: 80px;
  padding: 10px;
  cursor: pointer;
  outline: none;
`

export const LoaderContainer = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
