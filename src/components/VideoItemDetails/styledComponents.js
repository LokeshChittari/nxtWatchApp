import styled from 'styled-components'

const getButtonColor = props => {
  let bgColor
  if (props.isSelected === undefined) {
    if (props.theme === 'dark') {
      bgColor = '#64748b'
    } else {
      bgColor = '#64748b'
    }
  } else {
    bgColor = '#2563eb'
  }
  return bgColor
}

export const VideoItemDetailsContainer = styled.div`
  height: 91.5vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  display: flex;
`

export const BodyContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`

export const VideoDetailsItemContainer = styled.div`
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

export const TitleName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  font-size: 20px;
  margin-bottom: 0;
`
export const RowAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewsAndTimeline = styled.div`
  font-family: 'Roboto';
  color: #475569;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const Dot = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 40px;
`

export const LikeAndSaveButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CustomButton = styled.button`
  border-width: 0;
  font-size: 25px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-weight: 500;
  color: ${props => getButtonColor(props)};
`

export const ButtonLabel = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => getButtonColor(props)};
  margin-right: 10px;
  cursor: pointer;
  outline: none;
  margin-bottom: 8px;
`
export const ChannelLogoAndDetails = styled.div`
  width: 100%;
  border-top: 1px solid
    ${props => (props.theme === 'dark' ? '#475569' : '#64748b')};
  display: flex;
  justify-content: 'flex-start';
  padding-top: 20px;
`

export const ChannelLogo = styled.img`
  align-self: flex-start;
  margin-top: 10px;
  margin-right: 10px;
  width: 50px;
  height: 50px;
`

export const DetailsContainer = styled.div`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  //   color: #ffffff;
`
export const Subscribers = styled.p`
  font-family: 'Roboto';
  color: #475569;
`
export const DescriptionMobile = styled.p`
  font-family: 'Roboto';
  width: 100%;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Description = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    font-family: 'Roboto';
    display: block;
  }
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
