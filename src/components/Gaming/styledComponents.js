import styled from 'styled-components'

export const GamingContainer = styled.div`
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
export const GamingContentContainer = styled.div`
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
  padding-left: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const VideoItemContainer = styled.li`
  width: 45%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`
export const Thumbnail = styled.img`
  width: 80%;
  //   margin-right: 30px;
`

export const VideoDetailsContainer = styled.div`
  //   width: 90%;
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
`
export const Views = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
  font-size: 14px;
  padding-right: 0;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 450px;
  margin-top: 30px;
`
export const FailureViewResponse = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  text-align: center;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-weight: bold;
  text-align: center;
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
