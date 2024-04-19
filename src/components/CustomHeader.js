
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Image, Platform, StatusBar, Text, View } from 'react-native';
import icons from '../assets';
import strings from '../constants/Strings';
import { Colors } from '../theme';
import styles from './styles/CustomHeaderStyle';

const CustomHeader = ({
    statusBarColor = Colors.white,
    statusBarStyle = 'dark-content',
    outerContainerStyle
}) => {
    useEffect(() => {
        StatusBar.setBarStyle(statusBarStyle, true);
        Platform.OS === 'android' &&
            StatusBar.setBackgroundColor(statusBarColor, true);
    }, [statusBarStyle, statusBarColor]);

    return (
        <View style={[styles.container, outerContainerStyle]}>
            <View style={[styles.innerRowContainer, styles.headerContainer]}>
                <View style={styles.centerContainer}>
                    <Image source={icons.logo} style={styles.centerIcon} resizeMode='contain' />
                    <Text style={styles.centerTextStyle}>
                        {strings.thermonic}
                    </Text>
                </View>
            </View>
        </View>
    )
};

CustomHeader.propTypes = {
    statusBarColor: PropTypes.string,
    statusBarStyle: PropTypes.string,
    outerContainerStyle: PropTypes.object,
};

export default CustomHeader;