import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  scale,
  verticalScale,
  moderateScale,
} from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 46,
    borderRadius: 10,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.white
  },
  textInput: {
    flex: 1,
    width: '80%',
    fontFamily: Fonts.type.regular,
    color: Colors.textDark,
    fontSize: Fonts.size.regular,
    paddingRight: 5,
    textAlignVertical: 'center',
    includeFontPadding: false,
    paddingTop: 0,
    paddingBottom: 0,
  },
  alertText: {
    color: Colors.themeGreen,
    fontSize: Fonts.size.small,
    marginLeft: scale(5),
  },
  leftIcon: {
    height: verticalScale(17),
    width: scale(17),
    resizeMode: 'contain',
  },
  leftView: {
    position: 'absolute',
    right: 0,
    alignContent: 'center',
  },
  placeholderText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.type.regular,
  },
});

export default styles;
