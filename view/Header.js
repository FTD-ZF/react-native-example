import React, {Component} from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';
import BackBtn from './button/BackBtn';
const CommonStyles = require('../common/CommonStyles');
const Colors = require('../common/Colors');

class Header extends Component {
  render() {
    let leftTopButton = null;
    let rightTopButton = null;
    const buttons = this.props.children;
    const count = React.Children.count(buttons);

    switch (count) {
      case 1:
      leftTopButton = React.cloneElement(<BackBtn/>);
        break;
      case 2:
        break;
    }

    return (
      <View style={[Platform.OS == 'ios' ? CommonStyles.navContainer: CommonStyles.navContainerandroid]}>
        {leftTopButton}
        <Text style={CommonStyles.title} numberOfLines={1}>
          {this.props.title}
        </Text>
        {rightTopButton}
      </View>
    );
  }
}



module.exports = Header;
