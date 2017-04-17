import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Form, Item, Input, Label, InputGroup } from 'native-base';
import { Actions } from 'react-native-router-flux';

class EventDetails extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress= {() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Event Details</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <InputGroup>
              <Icon name='flash' style={{color:'#00C497'}}/>
              <Input placeholder='wanna do...'/>
            </InputGroup>
            <Item floatingLabel>
              <Label>where...</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>when...</Label>
              <Input />
            </Item>
            <InputGroup>
              <Icon name='ios-home' style={{color:'#00C497'}}/>
              <Input placeholder='Icon Textbox'/>
            </InputGroup>
          </Form>
        </Content>
      </Container>
    );
  }

}

export default EventDetails;