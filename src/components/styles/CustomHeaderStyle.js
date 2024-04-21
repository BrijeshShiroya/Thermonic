import { StyleSheet } from 'react-native';
import { Colors, verticalScale, Fonts, scale } from '../../theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.white,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.26,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 3,
        elevation: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(191, 193, 196, 0.26)',
        paddingHorizontal: 12,
        minHeight: 54
    },
    content: {
        flex: 1
    },
    title: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.type.semiBold,
        color: Colors.darkBlue,
        alignSelf: 'center',
        marginLeft: 10
    },
    leftContainer: {
        flex: 1,
        height: verticalScale(40),
        width: scale(40),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
        height: verticalScale(40),
        width: scale(40),
        alignItems: 'flex-end',
    },
    centerIcon: {
        height: 29,
        width: 117,
    },
    centerTextStyle: {
        fontSize: Fonts.size.tiny,
        fontFamily: Fonts.type.regular,
        color: Colors.textDark
    }
});

export default styles;
