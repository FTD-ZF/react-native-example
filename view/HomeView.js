/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
const Colors = require('../common/Colors');
const CommonStyles = require('../common/CommonStyles');
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    StatusBar,
    TouchableOpacity,
    Platform
} from 'react-native';

class RNExample extends Component {

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
            <View style={{alignItems: 'center',justifyContent: 'center',height:44,marginTop:20}}>
            <Text style={styles.title}>Example</Text>
              </View>
          </View>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} style={{
            backgroundColor: 'white',flex: 1
        }}/>
        </View>
        );
    }

    renderRow(contentData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => this.clickRow(contentData, rowID)}>
                <View style={styles.container}>
                    <Text style={styles.cellTitle}>{contentData.name}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    navView: {
      color:'white',
      backgroundColor:Colors.blue,
      height:64,
      textAlign: 'center'
    },
    container: {
        height: 64,
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color:'white',
        textAlign: 'center'
    },
    cellTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    cellView: {
        flex: 1,
        backgroundColor: 'white',
        height: 50
    }
});

AppRegistry.registerComponent('RNExample', () => RNExample);
