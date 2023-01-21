import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 91.5vh;
  width: 100vw;
  display: flex;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'}; ;
`
export const BodyContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImage = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundPageResponse = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const NotFoundPageDescription = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  font-weight: 500;
  width: 80%;
  text-align: center;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#616e7c')};
`
