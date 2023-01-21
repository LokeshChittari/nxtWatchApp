import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainContainer,
  LoginContainer,
  Logo,
  LoginForm,
  InputLabel,
  InputField,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: '',
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSuccessResponse = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickLogin = async e => {
    e.preventDefault()
    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessResponse(data.jwt_token)
    } else {
      this.setState({
        showError: true,
        errorMsg: data.error_msg,
      })
    }
  }

  render() {
    const {username, password, showError, errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const imgTheme = isDarkTheme ? 'dark' : 'light'
          return (
            <MainContainer theme={isDarkTheme ? 'dark' : 'light'}>
              <LoginContainer theme={isDarkTheme ? 'dark' : 'light'}>
                <Logo
                  src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${imgTheme}-theme-img.png`}
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onClickLogin}>
                  <InputLabel
                    htmlFor="userName"
                    theme={isDarkTheme ? 'dark' : 'light'}
                  >
                    USERNAME
                  </InputLabel>
                  <br />
                  <InputField
                    id="userName"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <br />
                  <br />

                  <InputLabel
                    htmlFor="password"
                    theme={isDarkTheme ? 'dark' : 'light'}
                  >
                    PASSWORD
                  </InputLabel>
                  <br />
                  <InputField
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <br />

                  <CheckBox
                    id="showPassword"
                    type="checkbox"
                    checked={showPassword}
                    onChange={this.onChangeShowPassword}
                  />
                  <CheckBoxLabel
                    htmlFor="showPassword"
                    theme={isDarkTheme ? 'dark' : 'light'}
                  >
                    Show Password
                  </CheckBoxLabel>

                  <LoginButton type="submit">Login</LoginButton>
                  {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
                </LoginForm>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
