import React from 'react';
import {Text,View} from 'react-native';
import firebase from 'firebase';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Matches from './screens/Matches';
import LoginForm from './screens/Login';
import RegisterForm from './screens/SignUp';
import {createBottomTabNavigator,  createAppContainer} from 'react-navigation';
import Header from './screens/common/Header';
import Button from './screens/common/Button';


class Main extends React.Component {
  state = {loggedIn: null, register: false, user: {}};
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDDdQAZX9m82b8S2LN4IuCowj4iQrYaP7g",
      authDomain: "authentication-ac999.firebaseapp.com",
      databaseURL: "https://authentication-ac999.firebaseio.com",
      projectId: "authentication-ac999",
      storageBucket: "authentication-ac999.appspot.com",
      messagingSenderId: "836963499398"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true, user: user})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  showRegister(){
    console.log('show register fired');
    this.setState({register: true});
  }
  showLogin(){
    console.log('show register fired');
    this.setState({register: false});
  }

  renderContent(){
    if(this.state.register === true && this.state.loggedIn === false){
      return(
        <View>
          <Header headerText="Authentication" />
          <RegisterForm />
          <Button onPress={() => this.showLogin()}>Login</Button>
        </View>
       );
    } else if(this.state.loggedIn){
      return (
        <View style={styles.containerStyle}>
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          <AppContainer screenProps={{ user: this.state.user}}/>
        </View>
      );
    } else if(this.state.register === false && this.state.loggedIn === false){
      return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
        <Button onPress={() => this.showRegister()}>Register</Button>
      </View>
      );
    }
  }

  render() {
    return (
     <View style={styles.containerStyle}>
     <Text>Hello</Text>
        {this.renderContent()}
      </View>
    );
  }
}

const Tab = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Matches: {
    screen: Matches,
  }
});
const AppContainer = createAppContainer(Tab);

const styles = {
  containerStyle: {
    flex: 1
  }
};

export default Main;
