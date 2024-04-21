import { StyleSheet } from 'react-native';
import {
    ApplicationStyles,
    Colors,
    Fonts,
    scale,
    verticalScale
} from '../../../theme';

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        flex: 1,
        paddingTop: verticalScale(8),
        paddingHorizontal: verticalScale(16),
    },
    innerContainer: {
        flex: 1,
        padding: scale(20),
    },
    placeholder: {
        marginLeft: 5,
        fontFamily: Fonts.type.semiBold,
        color: Colors.textDark,
        fontSize: Fonts.size.medium,
        alignSelf: 'flex-start',
    },
    fieldContainer: {
        marginBottom: 10
    },
    addCategoryButton: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(50)
    }

});

export default styles;
