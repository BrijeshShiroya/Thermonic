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
    innerContainer: {
        flex: 1,
        paddingHorizontal: verticalScale(20),
        justifyContent: 'center'
    },
    button: {
        marginBottom: 20
    }
});

export default styles;
