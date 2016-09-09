/**
 * 常用样式配置
 */

const React = require('react-native');
const Colors = require('./Colors');

const {StyleSheet} = React;

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainTable
    },
    navContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.blue,
        height: 64,
        alignItems: 'center'
    },
    navContainerAndroid: {
        flexDirection: 'row',
        backgroundColor: Colors.blue,
        height: 48,
        alignItems: 'center'
    },
    lineView: {
        backgroundColor: Colors.mainLine,
        height: 1
    },

    title: {
        flex: 1,
        marginRight: 80,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginTop: 20
    },
    popBtn: {
        width: 13,
        height: 20,
        marginLeft: 12,
        marginTop: 12
    },
    navLeftBtn: {
        width: 80,
        height: 44,
        marginTop: 20
    }
});

module.exports = commonStyles;
