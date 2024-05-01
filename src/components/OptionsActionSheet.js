import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Colors } from '../theme';
import styles from './styles/OptionsActionSheetStyle';
import ActionSheet from 'react-native-actions-sheet';

const OptionsActionSheet = ({ id, options, onOptionPress, onBeforeShow }) => {

    const optionPress = (option) => {
        onOptionPress(option)
    }
    return (
        <ActionSheet id={id} onBeforeShow={onBeforeShow}>
            <View style={styles.container}>
                {options.map(option => <Text style={styles.title} onPress={() => optionPress(option)}>{option}</Text>)}
            </View>
        </ActionSheet>
    );
};

OptionsActionSheet.propTypes = {
    id: PropTypes.string,
    options: PropTypes.array,
    onOptionPress: PropTypes.func,
    onBeforeShow: PropTypes.func,
};


export default OptionsActionSheet;
