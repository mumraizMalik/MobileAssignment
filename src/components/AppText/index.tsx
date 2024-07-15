import React from 'react';
import {
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
  Text as RNText,
  Dimensions,
  PixelRatio,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Typography} from '../../services/theme';

interface Props extends TextProps {
  bold?: any;
  size?: any;
  title?: any;
  colorText?: any;
  paddingVertical?: any;
  numberOfLines?: any;
  onPress?: () => void;
  defaultTextColor?: any;
  textStyle?: StyleProp<TextStyle>;
}
const AppText = (props: Partial<Props>) => {
  const myTheme: any = useTheme();
  const {fontScale} = Dimensions.get('window');
  const {bold, size, colorText, title, defaultTextColor} = props;
  return (
    <RNText
      {...props}
      style={[
        styles.text,
        bold && styles.bold,
        size && {fontSize: size},
        {
          color: defaultTextColor ? myTheme.colors.lightgray : colorText,
        },
        props.textStyle,
      ]}>
      {props.title}
    </RNText>
  );
};
export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: Typography.FONTS.SIZE.XSMALL,
    fontFamily: 'Cochin',
    color: 'black',
  },

  bold: {
    fontWeight: 'bold',
  },
});
