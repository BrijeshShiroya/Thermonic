import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {
        backgroundColor: Colors.themeBlueDisable,
        padding: 25,
        borderRadius: 10,
    },
});

export default styles;
