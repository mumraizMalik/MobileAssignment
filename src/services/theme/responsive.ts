import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const BASE_UNIT_WIDTH = 431;
const BASE_UNIT_HEIGHT = 916;
const horizontalScale = (size: any) => (width / BASE_UNIT_WIDTH) * size;
const verticalScale = (size: any) => (height / BASE_UNIT_HEIGHT) * size;
const moderateScale = (size: any, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
export {horizontalScale, verticalScale, moderateScale};
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;
