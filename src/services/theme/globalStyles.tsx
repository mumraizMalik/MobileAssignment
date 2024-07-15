import {StyleSheet} from 'react-native';
import {horizontalScale} from '.';
export const GST = StyleSheet.create({
  CENTER: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  SPACEBETWEEN: {
    justifyContent: 'space-between',
  },
  MAIN: {
    flex: 1,
  },
  ROW: {
    flexDirection: 'row',
  },
  mid_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  COLUMN: {
    flexDirection: 'column',
  },
  SCREEN_PADDING: {
    paddingHorizontal: horizontalScale(16),
  },
});
