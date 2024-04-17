import { StyleSheet } from 'react-native';
import { Colors, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
    buttonTouchable: {
        height: verticalScale(46),
        backgroundColor: Colors.themeBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    disabledButton: {
        backgroundColor: Colors.themeBlueDisable,
    },
    buttonText: {
        fontFamily: Fonts.type.semiBold,
        color: Colors.white,
        fontSize: Fonts.size.regular,
    },
});

export default styles;
