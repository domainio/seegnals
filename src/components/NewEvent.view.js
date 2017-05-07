import React, { Component } from 'react';
import { Container, Header, Title, Text, Button, Left, Right, Body, Icon, Content, Form, Item, Input, Label, InputGroup } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createEvent } from '../actions/Event.actions';
import { loginUser } from '../actions/Auth.actions';

class NewEvent extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      location: '',
      datetime: '',
      title: '',
      description: '',
    };
  }

  componentWillMount() {
    // this.props.loginUser({email: 'go@gmail.com', password: '123bla'});
  }

  createEvent() {
    const event = {...this.state};
    this.props.createEvent(event);
    // todo: get target.data from inputs... (((((((
  }

  render() {
    const { title, location, datetime, description } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress= {() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title>New Event</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <InputGroup>
              <Icon name='flash' style={{color:'#00C497'}}/>
              <Input value={title} placeholder='wanna do...' onChangeText={(title) => this.setState({ title })}/>
            </InputGroup>
            <InputGroup>
              <Icon name='flash' style={{color:'#00C497'}}/>
              <Input value={location} placeholder='where' onChangeText={(location) => this.setState({ location })}/>
            </InputGroup>
            <InputGroup>
              <Icon name='flash' style={{color:'#00C497'}}/>
              <Input value={datetime} placeholder='when' onChangeText={(datetime) => this.setState({ datetime })}/>
            </InputGroup>
            <Button rounded block info style={Styles.CreateButton} onPress={this.createEvent.bind(this)}>
              <Text>Create</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  loginUser: (credentials) => dispatch(loginUser(credentials)),
});

export default connect(null, mapDispatchToProps)(NewEvent);

const Styles = StyleSheet.create({
  CreateButton: {
    marginLeft: 10,
    marginRight: 10,
  },
});