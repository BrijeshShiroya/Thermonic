import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, scale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        flex: 1
    },
    innerContainer: {
        paddingVertical: verticalScale(20),
        paddingHorizontal: scale(20)
    },
    emailContainer: {
        marginBottom: 10
    },
    placeholder: {
        marginLeft: 5,
        fontFamily: Fonts.type.semiBold,
        color: Colors.textDark,
        fontSize: Fonts.size.medium,
        alignSelf: 'flex-start',
    },
    cancelButton: {
        marginTop: verticalScale(30),
        width: '100%',
    },
    addSubcategoryTitle: {
        fontFamily: Fonts.type.semiBold,
        color: Colors.themeBlue,
        fontSize: Fonts.size.regular,
        marginTop: 5
    },
    subCategoryTitle: {
        marginTop: 10,
        fontFamily: Fonts.type.semiBold,
        color: Colors.textDark,
        fontSize: Fonts.size.medium,
    },
    input: {
        paddingHorizontal: verticalScale(20),
        height: 46,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.darkGray,
        color: Colors.darkGray,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.medium,
    },
    addCategoryButton: {
        marginTop: verticalScale(30),
        margin: scale(20),
    },
    productname: {
        fontFamily: Fonts.type.semiBold,
        color: Colors.textDark,
        fontSize: Fonts.size.regular,
        marginBottom: 10
    },
    fieldContainer: {
        marginBottom: 10
    },
});

export default styles;
