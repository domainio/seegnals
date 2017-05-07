import React, { Component } from 'react';
import { Container, Fab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import EventList from './EventList';

export default class EventTab extends Component {

  constructor(props) {
    super(props);
  }

  newEvent() {
    Actions.newEvent();
  }

  render() {
    return (
      <Container>
        <EventList />
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={this.newEvent}
        >
          <Icon name="ios-add" />
        </Fab>
      </Container>
    );
  }
};