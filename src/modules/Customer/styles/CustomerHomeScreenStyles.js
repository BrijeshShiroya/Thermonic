import { StyleSheet } from 'react-native';
import {
    ApplicationStyles,
    scale,
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
        paddingVertical: verticalScale(20),
        paddingHorizontal: scale(20)
    },
    orderList: {
        paddingTop: 15,
        paddingBottom: 30
    }
});

export default styles;
