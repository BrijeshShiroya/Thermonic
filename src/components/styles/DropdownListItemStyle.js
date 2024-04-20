import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: Colors.filterSep
    },
    itemTitle: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.regular,
        color: Colors.textDark
    }
});

export default styles;
