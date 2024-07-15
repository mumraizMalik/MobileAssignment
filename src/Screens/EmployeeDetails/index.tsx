import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {
  GST,
  Typography,
  horizontalScale,
  verticalScale,
} from '../../services/theme';
import AppText from '../../components/AppText';

const EmployeeDetails = ({route}: any) => {
  const data = route?.params;
  return (
    <View style={{flex: 1, ...GST.SCREEN_PADDING, backgroundColor: 'white'}}>
      {route?.params ? (
        <>
          <View style={{...GST.CENTER, marginVertical: verticalScale(32)}}>
            <Image
              source={{
                uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
              }}
              style={{
                width: horizontalScale(200),
                height: horizontalScale(200),
                backgroundColor: 'gray',
                borderRadius: 999,
              }}
            />
          </View>
          <View style={{marginLeft: horizontalScale(16)}}>
            <AppText title={'Name:'} bold={true} />
            <AppText
              title={data.employee_name}
              size={Typography.FONTS.SIZE.MEDIUM}
              bold={true}
            />
            <View style={{marginVertical: verticalScale(8)}} />
            <AppText title={'Salary:'} />
            <AppText
              title={data.employee_salary}
              bold={true}
              size={Typography.FONTS.SIZE.MEDIUM}
            />
            <View style={{marginVertical: verticalScale(8)}} />
            <AppText title={'Age : '} />
            <AppText
              title={data.employee_age}
              bold={true}
              size={Typography.FONTS.SIZE.MEDIUM}
            />
          </View>
        </>
      ) : (
        <View style={{flex: 1}}>
          <AppText
            title={'Select Employee from Employee list to view full details'}
            bold={true}
            size={Typography.FONTS.SIZE.LARGE}
            colorText={'red'}
          />
        </View>
      )}
    </View>
  );
};

export default EmployeeDetails;
