// import React, { Component } from 'react';
// import { StatusBar } from 'react-native';
// import { Drawer, Container, TabHeading, Text, Header, Title, Button, Left, Right, Body, Icon, Tab, Tabs } from 'native-base';
// import EventTab from './components/EventTab';
// import SideMenu from './SideMenu';
// import Main from './Main';
//
// export default class Main extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//   }
//
//   closeDrawer() {
//     // this._drawer._root.close()
//     this.setState({isOpen: false});
//   }
//
//   openDrawer() {
//     // console.log('open me!');
//     // this._drawer._root.open()
//     this.setState({isOpen: true});
//   };
//
//   render() {
//     return (
//       <Drawer
//         type="static"
//         open={this.state.isOpen}
//         content={<SideMenu navigator={this._navigator}/>}
//         onClose={() => this.closeDrawer()}
//         styles={{flex: 1}}
//       >
//         <Main openSideMenu={this.openDrawer} />
//       </Drawer>
//     );
//   }
// }