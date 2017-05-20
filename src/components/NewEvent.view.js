import React, { Component } from 'react';
import { Container, Header, Title, Text, Button, Left, Right, Body, Icon, Content, Form, Item, Input, Label, InputGroup } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createEvent } from '../actions/Event.actions';
import { loginUser } from '../actions/Auth.actions';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class NewEvent extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      location: '',
      datetime: '',
      title: '',
      description: '',
      date: '',
      time: '12:00'
    };
    this.timeFormat = 'HH:mm';
    this.dateFormat = 'ddd, MMM MM, YYYY';
  }

  componentWillMount() {
    // this.props.loginUser({email: 'go@gmail.com', password: '123bla'});
    const utcNow = moment().utc().valueOf();
    this.setState({ date: moment(utcNow).format(this.dateFormat) });
  }

  createEvent() {
    const event = {...this.state};
    this.props.createEvent(event);
    // todo: get target.data from inputs... (((((((
  }

  setDate(date) {
    this.setState({ date });
  }

  setTime(time) {
    this.setState({ time });
  }

  // tryOpenDatepicker() {
  //   DatePicker.onPressDate();
  // }

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
            <DatePicker
              is24Hour={true}
              style={{width: 200}}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format={this.dateFormat}
              minDate={this.state.date}
              maxDate={moment(Date.MAX_VALUE).format(this.dateFormat)}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setDate(date)}}
            />
            <DatePicker
              is24Hour={true}
              style={{width: 200}}
              date={this.state.time}
              mode="time"
              placeholder="select time"
              format={this.timeFormat}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(time) => {this.setTime(time)}}
            />
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