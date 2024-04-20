import { StyleSheet } from 'react-native';
import { ApplicationStyles, scale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        flex: 1
    },
    innerContainer: {
        paddingVertical: verticalScale(20),
        paddingHorizontal: scale(20)
    }
});

export default styles;
