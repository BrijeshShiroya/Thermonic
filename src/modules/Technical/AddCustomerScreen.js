import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CustomBackground, CustomButton, CustomHeader, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/AddCustomerScreenStyle';

const AddCustomerScreen = ({ navigation, route }) => {

    const [customerName, setCustomerName] = useState('')
    const [customerUsername, setCustomerUsername] = useState('')
    const [customerPassword, setCustomerPassword] = useState('')
    const [customerContact, setCustomerContact] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [customerWebsite, setCustomerWebsite] = useState('')
    const [other, setOther] = useState('')

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAddPress = () => {
        alert('On Add Customer Press')
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={'Add Customer'} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <Text style={styles.placeholder}>{strings.name}</Text>
                    <CustomTextInput
                        value={customerName}
                        placeholder={strings.name}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerName(text)}
                    />
                    <Text style={styles.placeholder}>{strings.username}</Text>
                    <CustomTextInput
                        value={customerUsername}
                        placeholder={strings.username}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerUsername(text)}
                    />
                    <Text style={styles.placeholder}>{strings.password}</Text>
                    <CustomTextInput
                        value={customerPassword}
                        placeholder={strings.password}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerPassword(text)}
                    />
                    <Text style={styles.placeholder}>{strings.contact}</Text>
                    <CustomTextInput
                        value={customerContact}
                        placeholder={strings.contact}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerContact(text)}
                    />
                    <Text style={styles.placeholder}>{strings.email}</Text>
                    <CustomTextInput
                        value={customerEmail}
                        placeholder={strings.email}
                        keyboardType={'email-address'}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerEmail(text)}
                    />
                    <Text style={styles.placeholder}>{strings.Address}</Text>
                    <CustomTextInput
                        value={customerAddress}
                        placeholder={strings.Address}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerAddress(text)}
                    />
                    <Text style={styles.placeholder}>{strings.website}</Text>
                    <CustomTextInput
                        value={customerWebsite}
                        placeholder={strings.website}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerWebsite(text)}
                    />
                    <Text style={styles.placeholder}>{strings.otherInfo}</Text>
                    <CustomTextInput
                        value={other}
                        placeholder={strings.otherInfo}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setOther(text)}
                    />
                </View>
                <CustomButton
                    title={strings.add}
                    style={styles.addCategoryButton}
                    onPress={onAddPress}
                />
            </CustomBackground>
        </View>
    );
};

export default AddCustomerScreen;
