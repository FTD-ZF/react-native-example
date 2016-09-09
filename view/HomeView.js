/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Picker from './picker/picker';
const Colors = require('../common/Colors');
const CommonStyles = require('../common/CommonStyles');
import {
    StyleSheet,
    Text,
    ListView,
    View,
    StatusBar,
    TouchableOpacity,
    Platform
} from 'react-native';

class HomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        var responseData = [
            {
                'id': 1,
                "name": '省市区3级联动pickerView'

            }, {
                'id': 2,
                "name": '上传图片'
            }
        ]
        this.setState({dataSource: this.state.dataSource.cloneWithRows(responseData)});
    }

    render() {
        return (
          <View>
            <StatusBar backgroundColor="blue" barStyle='light-content' />
          <View style={styles.navView}>
            <View style={styles.navTitleView}>
            <Text style={styles.title}>Example</Text>
              </View>
          </View>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
        </View>
        );
    }

    renderRow(contentData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => this.clickRow(rowID)}>
                <View style={styles.container}>
                    <Text style={styles.cellTitle}>{contentData.name}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    clickRow(rowID) {
      if (rowID == '0') {
      this.props.navigator.push({
        title: '联动',
        component: Picker
      });
    }
    }
}

const styles = StyleSheet.create({
    navView: {
      backgroundColor:Colors.blue,
      height:64
    },
    navTitleView: {
      alignItems: 'center',
      justifyContent: 'center',
      height:44,
      marginTop:20
    },
    container: {
        height: 50,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color:'white',
        textAlign: 'center'
    },
    cellTitle: {
        fontSize: 17,
        textAlign: 'center'
    }
});
module.exports = HomeView;
