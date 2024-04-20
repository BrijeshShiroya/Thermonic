
import React from 'react';
import PropTypes from 'prop-types';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles/CustomSearchbarStyle';
import strings from '../constants/Strings';
import { Colors } from '../theme';
import icons from '../assets';

const CustomSearchbar = ({
    value,
    handleSearch = () => { },
    onFilterPress = () => { },
    containerStyle
}) => {
    return (
        <View style={containerStyle}>
            <View style={styles.container}>
                <TextInput
                    placeholder={strings.search}
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={value}
                    onChangeText={queryText => handleSearch(queryText)}
                    style={styles.input}
                    placeholderTextColor={Colors.darkGray}
                />
                <Image source={icons.search} style={styles.searchIcon} />
                <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
                    <Image source={icons.filter} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

CustomSearchbar.propTypes = {
    value: PropTypes.string,
    handleSearch: PropTypes.func,
    onFilterPress: PropTypes.func,
    containerStyle: PropTypes.object,
};

export default CustomSearchbar;
