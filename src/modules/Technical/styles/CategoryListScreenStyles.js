import { StyleSheet } from 'react-native';
import {
    ApplicationStyles,
    scale,
    verticalScale
} from '../../../theme';

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        paddingTop: verticalScale(20),
        paddingHorizontal: verticalScale(16),
        justifyContent: 'center'
    },
    innerContainer: {
        flex: 1,
        marginTop: verticalScale(20),
        marginHorizontal: scale(20)
    },
    field: {
        marginBottom: verticalScale(10)
    },
    logoutButton: {
        marginVertical: verticalScale(30),
        marginHorizontal: verticalScale(16),
    },
    itemContainer: {
        marginVertical: 15
    }
});

export default styles;
