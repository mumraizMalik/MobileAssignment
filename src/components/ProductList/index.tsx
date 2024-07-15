import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Employee, Item} from '../../Screens/EmployeeList/types';
import {useNavigation} from '@react-navigation/native';
import {
  GST,
  Typography,
  horizontalScale,
  verticalScale,
} from '../../services/theme';
import AppText from '../AppText';
const ProductList = ({list}: any) => {
  const navigation: any = useNavigation();
  const handelPress = (item: Employee) => {
    navigation.navigate('EmployeeDetails', item);
  };
  const renderItem = ({item}: Item) => {
    return (
      <TouchableOpacity
        onPress={() => handelPress(item)}
        style={{
          backgroundColor: 'orange',
          marginBottom: verticalScale(8),
          ...GST.ROW,
          alignItems: 'center',
          paddingVertical: verticalScale(8),
          borderRadius: horizontalScale(8),
        }}>
        <Image
          source={{
            uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
          }}
          style={{
            width: horizontalScale(65),
            height: horizontalScale(65),
            backgroundColor: 'gray',
            borderRadius: 999,
          }}
        />
        <View style={{marginLeft: horizontalScale(16)}}>
          <AppText
            title={item.employee_name}
            size={Typography.FONTS.SIZE.MEDIUM}
            bold={true}
          />
          <View style={{...GST.ROW}}>
            <AppText title={'Salary : '} bold={true} />
            <AppText title={item.employee_salary} bold={true} />
          </View>
          <View style={{...GST.ROW}}>
            <AppText title={'Age : '} bold={true} />
            <AppText title={item.employee_age} bold={true} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductList;
