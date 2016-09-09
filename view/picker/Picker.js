import React, {Component} from 'react';
import Picker from 'react-native-picker';
import {View, Text, Platform} from 'react-native';

const pickerSelName = require('./PickerSelName.json');
const pickerSelVal = require('./PickerSelVal.json');

class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selAreaVal: '请选择省、市、区',
            selectedValue: [
                '北京市', '北京市', '东城区'
            ],
            pickerData: pickerSelName,
            areaData: pickerSelVal,
            selAreaIds: []
        }
    }

    _selArea() {
        this.setState({areaModalShow: true});
        this.picker.toggle();
    }
    //选择地址
    setPickerValue(pickerVal) {

        this.setState({
            selAreaColor: 'black',
            selAreaIds: '',
            selectedValue: pickerVal,
            selAreaVal: pickerVal[0] + pickerVal[1] + pickerVal[2]
        });
        var areaModel = this.state.areaData.find((n) => n.ProvinceName == pickerVal[0]);
        this.state.selAreaIds.push(areaModel.ProvinceID);

        var cityModel = areaModel.CityList.find((n) => n.CityName == pickerVal[1]);
        this.state.selAreaIds.push(cityModel.CityID);

        if (pickerVal[2] != undefined) {
            var DisModel = cityModel.DistrictList.find((n) => n.DistrictName == pickerVal[2]);
            this.state.selAreaIds.push(DisModel.DistrictID);
        } else {
            this.state.selAreaIds.push('');
        }
        this.setState({selAreaIds: this.state.selAreaIds});
    }

    render() {
        return (
            <View >
                <Picker ref= {picker => this.picker = picker} style={{
                    height: 320
                }} showDuration={300} pickerData={this.state.pickerData} selectedValue={this.state.selectedValue} onPickerDone= {(pickedValue) => {this.setPickerValue(pickedValue)}}/>
            </View>
        );
    }
}



module.exports = Picker;
