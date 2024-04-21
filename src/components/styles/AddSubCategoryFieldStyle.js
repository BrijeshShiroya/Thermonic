import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        flex: 1
    },
    delete: {
        marginLeft: 6,
        height: 30,
        width: 30
    }
});

export default styles;
