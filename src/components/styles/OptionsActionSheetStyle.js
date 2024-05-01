import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.regular,
        color: Colors.textDark,
        padding: 20
    }
});

export default styles;
