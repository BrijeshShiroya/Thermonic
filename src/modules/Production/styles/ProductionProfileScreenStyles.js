import { StyleSheet } from 'react-native';
import {
    ApplicationStyles,
    Fonts,
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
    },
    field: {
        marginBottom: verticalScale(10)
    },
    logoutButton: {
        marginVertical: verticalScale(30),
        marginHorizontal: verticalScale(16),
    },
    title: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size.h6,
        alignSelf: "center",
        marginBottom: 20
    }
});

export default styles;
