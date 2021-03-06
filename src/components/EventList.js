import React, { Component } from 'react';
import { Container, Content, Left, Body, Right, View, ListItem, Thumbnail, Text, Icon } from 'native-base';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import { actions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';
import { closeDrawer } from '../actions/Drawer.actions';
import { fetchEvents } from '../actions/Event.actions';

// const {
//   pushRoute,
// } = actions;

class EventList extends Component {

  // static propTypes = {
  //   pushRoute: React.PropTypes.func,
  // };

  constructor(props) {
    super(props);
    // this.state = {
    //   events: [],
    // };
  }

  // pushRoute(route) {
  //   this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  // }

  componentWillMount() {
    // const events = [{
    //   id: '3123123',
    //   imgUrl: require('../cats.jpg'),
    //   title: 'Kumar Pratik',
    //   description: 'Doing what you like will always keep you happy . .',
    //   location: 'Tal-Aviv',
    //   eventTime: Date.now(),
    //   updatedTime: Date.now(),
    // }];
    this.props.fetchEvents();
  }

  onPressEvent(event) {
    this.props.closeDrawer();
    Actions.eventDetails(event);
  }

  render() {
    const { events } = this.props;
    const imgUrl = require('../cats.jpg');
    return (
      <Container>
        <Content>
          {events.map(event => (
            <ListItem avatar key={event.uid} onPress={() => this.onPressEvent(event)}>
              <Left>
                <Thumbnail source={imgUrl} />
              </Left>
              <Body>
                <Text>{event.title}</Text>
                <Text note>{event.description}</Text>
                <View style={Styles.details}>
                  <Text note>{event.location}</Text>
                  <Text note>{moment(event.eventTime).fromNow()}</Text>
                </View>
              </Body>
              <Right>
                <Text note>{moment(event.updatedTime).format('HH:MM')}</Text>
              </Right>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
};

const Styles = {
  details: {
    flexDirection: 'row',
  }
};

const mapStateToProps = state => {
  return {
    events: state.events.events
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    fetchEvents: () => dispatch(fetchEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
