import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f1f5f9'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  width: 90%;
  background-color: ${props =>
    props.theme === 'dark' ? '#000000' : '#ffffff'};
  border-radius: 10px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 480px;
  }
`

export const Logo = styled.img`
  align-self: center;
  height: 30px;
  width: 120px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 45px;
    margin-top: 40px;
    margin-bottom: 15px;
  }
`

export const LoginForm = styled.form`
  width: 100%;
  padding: 15px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const InputLabel = styled.label`
  font-weight: bold;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#64748b')};
  font-size: 12px;
`

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  outline: none;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const CheckBoxLabel = styled.label`
  font-weight: 400;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  font-size: 14px;
`

export const CheckBox = styled.input`
  margin-right: 10px;
  height: 15px;
  width: 15px;
  margin-bottom: 25px;
`
export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3b82f6;
  border-width: 0;
  border-radius: 5px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
`
