/**
 * 导航控制器
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StatusBar,
  Navigator,
  Image,
  TouchableOpacity,
  BackAndroid
} from 'react-native';

import CommonStyles from '../common/CommonStyles';
import Colors from '../common/Colors';
import Router from './utils/router';
import HomeView from './HomeView';

const defaultRoute = {
  id: 'HomeView',
  title: '登录',
  component: HomeView
};

class RNExample extends Component {
  componentWillMount(){
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }
  componentWillUnmount() {

      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);


  }
  onBackAndroid = () => {

      const {
          navigator
      } = this.refs;
      if (navigator) {
          navigator.pop();
          return true;
      }

      return false;
  };
  constructor() {
      super();
      this.state = {
        isLoading: true,
        store: true,
      };
    }
  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    if (!this.router) {
      this.router = new Router(navigator);
    }
    return <route.component {...route.params} router={this.router} navigator={navigator}/>;
  }

  render() {
    return (
        <Navigator initialRoute = {defaultRoute}
                 configureScene = {this.configureScene}
                    renderScene = {this.renderScene.bind(this)}
                            ref = 'navigator' />
    );
  }
}

module.exports = RNExample;
AppRegistry.registerComponent('RNExample', () => RNExample);
