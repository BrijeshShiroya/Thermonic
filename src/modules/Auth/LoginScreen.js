import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  Text,
  View
} from 'react-native';
import {
  CustomButton,
  CustomTextInput,
  Loader,
} from '../../components';
import appConstants from '../../constants/AppConsts';
import strings from '../../constants/Strings';
import styles from './styles/LoginScreenStyles';
import { useDispatch, useSelector } from 'react-redux';
import AuthTypes from '../../redux/AuthRedux';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('brijesh@yopmail.com');
  const [password, setPassword] = useState('123456');
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const { fetching } = useSelector(state => state.auth);


  const onLoginPress = () => {
    if (appConstants.email_reg.test(email?.trim()) === false) {
      Alert.alert(strings.thermonic, strings.invalidEmail);
    } else if (password?.trim() === '') {
      Alert.alert(strings.thermonic, strings.invalidPassword);
    } else {
      Keyboard.dismiss();
      dispatch(AuthTypes.authRequest(email.toLocaleLowerCase(), password));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.placeholder}>{strings.email}</Text>
          <CustomTextInput
            value={email}
            placeholder={strings.email}
            keyboardType={'email-address'}
            containerStyle={styles.emailContainer}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.placeholder}>{strings.password}</Text>
          <CustomTextInput
            secureTextEntry={secureTextEntry}
            value={password}
            placeholder={strings.password}
            containerStyle={styles.passwordContainer}
            onChangeText={text => setPassword(text)}
            onLeftPress={() => setSecureTextEntry(!secureTextEntry)}
          />
          <CustomButton
            title={strings.loginButton}
            style={styles.loginButton}
            onPress={onLoginPress}
          />
        </ScrollView>
      </View>
      {fetching && <Loader />}
    </View>
  );
};

export default LoginScreen;
