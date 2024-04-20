import { StyleSheet } from 'react-native';
import { Colors, verticalScale, Fonts, ApplicationStyles } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        paddingHorizontal: verticalScale(20),
        height: 46,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.darkGray,
        color: Colors.darkGray,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.medium,
    },
    searchIcon: {
        position: 'absolute',
        alignSelf: 'center',
        right: 44
    },
    filterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        height: 46,
    }
});

export default styles;
