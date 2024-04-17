import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  verticalScale
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  emailContainer: {
    marginBottom: 10
  },
  loginButton: {
    marginTop: verticalScale(30),
    width: '100%',
  }
});

export default styles;
