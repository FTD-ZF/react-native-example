/**
 * Menu Button
 */
import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Image
} from 'react-native';


class BackBtn extends Component {

  popView(){
    const {navigator} = this.refs;
    if(_navigator) {
        _navigator.pop();
    }
  }
    render() {
        return (
            <TouchableOpacity onPress={() => this.popView()}
                                style={this.props.style}
                        activeOpacity={1}>
                <Image style={{width: 13,height: 20,marginLeft:12}}
                      source={require('../../img/whiteBack.png')}/>
            </TouchableOpacity>
        );
    }
}

module.exports = BackBtn;
