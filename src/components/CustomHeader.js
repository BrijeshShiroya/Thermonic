
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Image, Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import icons from '../assets';
import strings from '../constants/Strings';
import { Colors } from '../theme';
import styles from './styles/CustomHeaderStyle';

const CustomHeader = ({
    leftEnable = false,
    rightEnable = false,
    isTitle = false,
    centerEnable = true,
    statusBarColor = Colors.white,
    statusBarStyle = 'dark-content',
    outerContainerStyle,
    title = '',
    onLeftPress = () => { },
    onRightPress = () => { },
}) => {
    useEffect(() => {
        StatusBar.setBarStyle(statusBarStyle, true);
        Platform.OS === 'android' &&
            StatusBar.setBackgroundColor(statusBarColor, true);
    }, [statusBarStyle, statusBarColor]);

    return (
        <View style={[styles.container, outerContainerStyle]}>
            {leftEnable ?
                <TouchableOpacity style={styles.leftContainer} onPress={onLeftPress}>
                    <Image source={icons.back} resizeMode='contain' />
                    {isTitle && <Text style={styles.title}>{title}</Text>}
                </TouchableOpacity> : <View style={styles.content} />}
            {centerEnable ? <View style={styles.centerContainer}>
                <Image source={icons.logo} style={styles.centerIcon} resizeMode='contain' />
                <Text style={styles.centerTextStyle}>
                    {strings.thermonic}
                </Text>
            </View> : <View />}
            {rightEnable ? <TouchableOpacity style={styles.rightContainer} onPress={onRightPress}>
                <Image source={icons.add} resizeMode='contain' />
            </TouchableOpacity> : <View style={styles.content} />}
        </View>
    )
};

CustomHeader.propTypes = {
    statusBarColor: PropTypes.string,
    statusBarStyle: PropTypes.string,
    outerContainerStyle: PropTypes.object,
    leftEnable: PropTypes.bool,
    rightEnable: PropTypes.bool,
    isTitle: PropTypes.bool,
    onLeftPress: PropTypes.func,
    onRightPress: PropTypes.func
};

export default CustomHeader;