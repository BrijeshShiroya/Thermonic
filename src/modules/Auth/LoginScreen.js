import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  Text,
  View
} from 'react-native';
import {
  CustomTextInput,
} from '../../components';
import appConstants from '../../constants/AppConsts';
import strings from '../../constants/Strings';
import styles from './styles/LoginScreenStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);


  const onLoginPress = () => {
    if (appConstants.email_reg.test(email?.trim()) === false) {
      Alert.alert(strings.writeWay, strings.invalidEmail);
    } else if (password?.trim() === '') {
      Alert.alert(strings.writeWay, strings.invalidPassword);
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <CustomTextInput
            value={email}
            placeholder={strings.email}
            keyboardType={'email-address'}
            containerStyle={styles.emailContainer}
            onChangeText={text => setEmail(text)}
          />
          <CustomTextInput
            secureTextEntry={secureTextEntry}
            value={password}
            placeholder={strings.password}
            containerStyle={styles.passwordContainer}
            onChangeText={text => setPassword(text)}
            onLeftPress={() => setSecureTextEntry(!secureTextEntry)}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;
