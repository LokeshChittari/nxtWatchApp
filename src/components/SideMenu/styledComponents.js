import styled from 'styled-components'

const activeMenuBg = props => {
  let bgColor
  if (props.isActive) {
    if (props.theme === 'dark') {
      bgColor = '#424242'
    } else {
      //   bgColor = '#f1f1f1'
      bgColor = '#e2e8f0'
    }
  } else {
    bgColor = 'transparent'
  }
  return bgColor
}

export const NavContainer = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    width: 30%;
    max-width: 300px;
    height: 91.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props =>
      props.theme === 'dark' ? '#212121' : '#ffffff'};
  }
`
export const NavItemsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

export const MenuItemContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => activeMenuBg(props)};
`

export const MenuItem = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  margin-left: 20px;
  font-weight: ${props => (props.isActive === true ? 'bold' : 'normal')};
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-bottom: 25px;
`

export const ContactUsHeading = styled.h2`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`
export const IconsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const Note = styled.p`
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  font-size: 18px;
  width: 60%;
  font-weight: 500;
`
