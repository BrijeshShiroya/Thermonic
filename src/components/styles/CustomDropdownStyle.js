import { StyleSheet } from 'react-native';
import { Colors, Fonts, verticalScale } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        backgroundColor: Colors.listItemBg
    },
    innerContainer: {
        flex: 1
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
    cancelButton: {
        marginTop: verticalScale(30),
        width: '100%',
    },
});

export default styles;
