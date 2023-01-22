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

export const Navbar = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: ${props =>
      props.theme === 'dark' ? '#212121' : '#ffffff'};
  }
`

export const NavBarMobile = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${props =>
      props.theme === 'dark' ? '#212121' : '#ffffff'};
  }
  @media screen and (min-width:768px){
      display:none;
  }
`
export const Logo = styled.img`
  height: 30px;
  width: 120px;
`
export const NavItemsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
`
export const NavItem = styled.li``
export const ThemeButton = styled.button`
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    margin-right: 25px;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 25px;
`
export const LogoutButton = styled.button`
  border-width: 0;
  border: 2px solid ${props => (props.theme === 'dark' ? '#ffffff' : '#4f46e5')};
  border-radius: 5px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
  padding: 10px;
  width: 100px;
  font-family: Roboto;
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#4f46e5')};
  font-weight: 500;
  cursor: pointer;
  outline: none;
`

export const LogoutIcon = styled.button`
  border-width: 0;
  background-color: transparent;
  margin-left: 15px;
`
export const TriggerButton = styled.button`
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
`
export const CloseButton = styled.div`
  align-self: flex-end;
  margin-right: 30px;
  margin-top: 30px;
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 25px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const NavMenuList = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavMenuItemContainer = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => activeMenuBg(props)};
`
export const NavMenuItem = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`
export const IconBox = styled.div`
  height: 25px;
  width: 25px;
  font-size: 25px;
  padding: 0;
  margin: 0;
`
export const NavMenuItemName = styled.p`
  font-family: 'Roboto';
  font-weight: ${props => (props.isActive === true ? 'bold' : 'normal')};
  margin-left: 20px;
  text-align: left;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const LogoutModalContainer = styled.div`
  //   position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoutPopupModal = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  min-height: 200px;
  width: 350px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
`

export const LogoutNote = styled.div`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const CancelButton = styled.button`
  border: 1px solid ${props => (props.theme === 'dark' ? '#ffffff' : '#475569')};
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#616e7c')};
  background-color: transparent;
  width: 100px;
  padding: 10px;
  //   border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`
export const ConfirmButton = styled.button`
  border-width: 0;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #3b82f6;
  width: 100px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  //   border-radius: 5px;
  cursor: pointer;
  outline: none;
`
