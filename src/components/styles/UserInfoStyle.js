import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    placeholder: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.small,
        color: Colors.grey,
    },
    title: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.regular,
        color: Colors.textDark,
        paddingBottom: 10,
    }
});

export default styles;
