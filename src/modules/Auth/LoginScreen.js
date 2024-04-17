import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  View
} from 'react-native';
import {
  CustomButton,
  CustomTextInput,
} from '../../components';
import appConstants from '../../constants/AppConsts';
import strings from '../../constants/Strings';
import styles from './styles/LoginScreenStyles';
import { AuthContext } from '../../navigation/AppNavigation';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('brijesh@yopmail.com');
  const [password, setPassword] = useState('123456');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { setIsSignIn } = React.useContext(AuthContext);


  const onLoginPress = () => {
    if (appConstants.email_reg.test(email?.trim()) === false) {
      Alert.alert(strings.thermonic, strings.invalidEmail);
    } else if (password?.trim() === '') {
      Alert.alert(strings.thermonic, strings.invalidPassword);
    } else {
      Keyboard.dismiss();
      setIsSignIn(true)
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
          <CustomButton
            title={strings.loginButton}
            style={styles.loginButton}
            onPress={onLoginPress}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;
