import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.lightGray
    },
    title: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.tiny,
        color: Colors.darkGray
    }
});

export default styles;
