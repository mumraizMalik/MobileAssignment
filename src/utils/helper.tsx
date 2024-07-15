import Toast from 'react-native-toast-message';
export const showToast = (text1: string, text2: string, type: boolean) => {
  console.log('text2', text2);
  Toast.show({
    text1: text1,
    text2: text2,
    type: type ? 'success' : 'error',
    visibilityTime: 2000,
  });
};
