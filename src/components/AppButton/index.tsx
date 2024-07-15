import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import AppText from '../AppText';
import {
  GST,
  Typography,
  horizontalScale,
  verticalScale,
} from '../../services/theme';

interface Props extends TouchableOpacityProps {
  title?: any;
  bgColor?: any;
  onPress?: () => void;
  size?: any;
  bold?: any;
  disable?: any;
  loading?: any;
  textColor?: any;
  buttonStyle?: StyleProp<ViewStyle>;
}

const AppButton = (props: Props) => {
  const {
    bgColor,
    size,
    buttonStyle,
    textColor,
    onPress,
    title,
    disable,
    loading,
    bold,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      disabled={disable}
      style={[
        styles.container,
        buttonStyle,
        {
          backgroundColor: bgColor ? bgColor : 'orange',
        },
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <AppText
          title={title}
          bold={bold}
          size={size ? size : Typography.FONTS.SIZE.LARGE}
          colorText={textColor ? textColor : 'white'}
        />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(AppButton);

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(14),
    paddingHorizontal: horizontalScale(32),
    borderRadius: 20,
    ...GST.CENTER,
    alignSelf: 'center',
  },
});
