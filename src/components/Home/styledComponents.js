import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`
export const BodyContainer = styled.div`
  display: flex;
  height: 91.5vh;
`
export const HomeContentContainer = styled.div`
  width: 100%;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 260px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CloseButton = styled.button`
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  //   align-self: flex-end;
`

export const Logo = styled.img`
  width: 160px;
  height: 40px;
  margin-bottom: 20px;
`

export const Description = styled.p`
  font-family: Roboto;
  color: #000000;
  width: 70%;
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    width: 45%;
    font-size: 22px;
  }
`

export const CustomButton = styled.button`
  width: 100px;
  border: 1px solid #000000;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 10px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;

  @media screen and (min-width: 576px) {
    width: 80%;
    padding: 25px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 25px;
  }
`
export const SearchInput = styled.input`
  width: 90%;
  padding: 8px;
  border: 1px solid ${props => (props.theme === 'dark' ? '#909090' : '#cbd5e1')};
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#ffffff'};
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  font-size: 16px;
  outline: none;
`
export const SearchButton = styled.button`
  border: 1px solid ${props => (props.theme === 'dark' ? '#909090' : '#cbd5e1')};
  background-color: ${props =>
    props.theme === 'dark' ? '#424242' : 'transparent'};
  width: 80px;
  height: 38px;
  cursor: pointer;
  outline: none;
`

export const VideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //   padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (min-width: 576px) {
    width: 48%;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 30%;
    //   min-height: 200px;
    max-height: 400px;
    margin-bottom: 30px;
    margin-right: 16px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
`
export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 20px;
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
    font-weight:500;
    font-size:14px;
`
export const ChannelName = styled.p`
  display: none;
  @media screen and (min-width: 567px) {
    display: block;
    font-family: 'Roboto';
    color: #475569;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 0;
  }
`
export const ChannelNameESM = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (min-width: 567px) {
    display: none;
  }
`

export const ViewsAndTimeline = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  color: #475569;
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 12px;
`
export const PublishedDate = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 12px;
`
export const Dot = styled.span`
  color: #475569;
  margin-left: 5px;
  margin-right: 5px;
  //   font-size: 40px;
  font-size: 12px;
`
export const DotESM = styled.span`
  color: #475569;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 12px;
  @media screen and (min-width: 576px) {
    display: none;
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
  width: 45%;
  margin-top: 30px;
  @media screen and(min-width:576px) {
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
