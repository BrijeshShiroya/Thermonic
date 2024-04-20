import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        padding: 1
    },
    innerContainer: {
        padding: 10,
        backgroundColor: Colors.white,
        margin: 2,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 0.8,
        borderRadius: 10,
    },
    title: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size.medium,
        color: Colors.textDark
    },
    productName: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.small,
        color: Colors.textDark
    },
    qty: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.tiny,
        color: Colors.textDark
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    other: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size.tiny,
        color: Colors.textDark
    },
});

export default styles;
