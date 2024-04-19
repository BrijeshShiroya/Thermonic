
import PropTypes from 'prop-types';
import React from 'react';
import icons from '../assets';
import styles from './styles/CustomBackgroundStyle';
import { ImageBackground } from 'react-native';

const CustomBackground = ({
    ...otherProps
}) => {
    return (
        <ImageBackground
            source={icons.homeBg}
            resizeMode="cover"
            style={styles.containerStyle}
            {...otherProps}
        >
            {otherProps.children}
        </ImageBackground>
    )
};

CustomBackground.propTypes = {
    module: PropTypes.object,
};

export default CustomBackground;