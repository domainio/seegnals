import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button, Spinner, Container, Content, Form, InputGroup, Icon, Input } from 'native-base';
// import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
import { loginUser } from '../actions/Auth.actions';
import config from '../../config/config';

class LoginView extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onButtonPress(){
    const { loginUser } = this.props;
    const { username, password } = this.state;
    loginUser({ username, password });
  }

  componentDidMount() {
    const { auth } = config;
    if (auth.silentLogin) {
      const { username, password } = auth;
      const { loginUser } = this.props;
      loginUser({ username, password });
    }
  }

  render(){
    const { username, password } = this.state;
    // const { loginUser } = this.props;
    if (config.auth.silentLogin) {
      return (
        <Container>
          <Content>
            <Spinner color="blue" />
          </Content>
        </Container>
      )
    }
    return (
      <Container>
        <Content>
        <Form>
          <InputGroup>
            <Icon name='flash' style={{color:'#00C497'}}/>
            <Input value={username} placeholder='username' onChangeText={(username) => this.setState({ username })}/>
          </InputGroup>
          <InputGroup>
            <Icon name='flash' style={{color:'#00C497'}}/>
            <Input value={password} placeholder='password' onChangeText={(password) => this.setState({ password })}/>
          </InputGroup>
          <Button rounded block info onPress={this.onButtonPress.bind(this)}>
            <Text>Login</Text>
          </Button>
        </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

const mapStateToProps = ({ spinner }) => {
  return {
    loading: spinner.globalLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);