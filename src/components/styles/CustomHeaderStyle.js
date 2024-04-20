import { StyleSheet } from 'react-native';
import { Colors, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.white,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.26,
        shadowRadius: 3,
        elevation: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(191, 193, 196, 0.26)',
    },
    headerContainer: {
        minHeight: 54,
        width: '100%',
    },
    innerRowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerIcon: {
        height: 29,
        width: 117
    },
    centerTextStyle: {
        fontSize: Fonts.size.tiny,
        fontFamily: Fonts.type.regular,
        color: Colors.textDark
    }
});

export default styles;
