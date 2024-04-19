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
    logoutButton: {
        marginTop: verticalScale(30),
        width: '100%',
    }
});

export default styles;
