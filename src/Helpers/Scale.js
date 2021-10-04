import { Dimensions, StatusBar, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const is_X_Ratio =
  (screenWidth / screenHeight).toFixed(2) == (375 / 812).toFixed(2) &&
  !isAndroid;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = is_X_Ratio ? 812 : 667;
/**
 * Screen Width
 */
const sWidth = screenWidth;

/**
 * Screen Height
 */
const sHeight = isAndroid
  ? screenHeight - StatusBar.currentHeight
  : screenHeight;

/**
 * Horizontal Size Scale
 * @param {number} size
 */
const scale = (size: number) => (sWidth / guidelineBaseWidth) * size;

/**
 * Vertical Size Scale
 * @param {number} size
 */
// const vScale = (size: number) => (screenHeight / guidelineBaseHeight) * size;
const vScale = (size: number) => (sWidth / guidelineBaseWidth) * size;

/**
 * Font Size Scale
 * @param {number} size
 * @param {number} [factor]
 */
const fontScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

export {
  sHeight,
  sWidth,
  scale,
  vScale,
  fontScale,
  is_X_Ratio,
};