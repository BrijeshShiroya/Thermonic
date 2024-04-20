import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  verticalScale,
  Colors,
  Fonts
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: verticalScale(8),
    paddingHorizontal: verticalScale(16),
  },
  scrollContainer: {
    paddingBottom: 10,
    flexGrow: 1,
    justifyContent: 'center'
  },
  emailContainer: {
    marginBottom: 10
  },
  loginButton: {
    marginTop: verticalScale(30),
    width: '100%',
  },
  placeholder: {
    marginLeft: 5,
    fontFamily: Fonts.type.semiBold,
    color: Colors.textDark,
    fontSize: Fonts.size.medium,
    alignSelf: 'flex-start',
  }
});

export default styles;
