import React, { Component } from 'react';
import { Container, Fab, Icon } from 'native-base';
import EventList from './EventList';

export default class EventTab extends Component {

  constructor(props) {
    super(props);
  }

  createEvent() {
    console.log('create event');
  }

  render() {
    return (
      <Container>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={this.createEvent}
        >
          <Icon name="ios-add" />
        </Fab>
        <EventList />
      </Container>
    );
  }
};