import PropTypes from 'prop-types';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts } from '../theme';
import styles from './styles/CustomTextInputStyles';


const CustomTextInput = ({
  style,
  containerStyle,
  error,
  placeholder = '',
  placeholderTextColor = Colors.textDark,
  blurOnSubmit = true,
  returnKeyType = 'done',
  onLeftPress,
  leftIcon,
  ...otherProps
}) => (
  <View style={[styles.inputContainer, containerStyle]}>
    <TextInput
      style={[styles.textInput, style, error && styles.redBorder]}
      placeholder={placeholder}
      blurOnSubmit={blurOnSubmit}
      placeholderTextColor
      returnKeyType={returnKeyType}
      {...otherProps}
    />
  </View>
);
``
CustomTextInput.propTypes = {
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  error: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string,
  onLeftPress: PropTypes.func,
  leftIcon: PropTypes.object,
};

export default CustomTextInput;
