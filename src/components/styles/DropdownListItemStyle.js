import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: Colors.filterSep,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.regular,
        color: Colors.textDark
    },
    next: {
        position: 'absolute',
        right: 5,
    },
    bin: {
        height: 24,
        width: 24
    }
});

export default styles;
