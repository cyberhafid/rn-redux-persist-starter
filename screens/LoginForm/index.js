import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../store/actions/auth'

class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text> Hello in login form </Text>
        {
          this.props.auth.isConnected
            ?
            <Text>You're connected !</Text>
            :
            <Button
              title="Click me to login"
              onPress={() => this.props.login()}
            />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  login
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
