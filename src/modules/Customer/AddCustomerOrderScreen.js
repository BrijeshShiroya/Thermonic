import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomBackground, CustomDropdown, CustomHeader, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/AddCustomerOrderScreenStyles';

const Products = [
    'PT100Head',
    'PT200Head',
    'PT200Head1',
    'PT200Head7',
    'PT100Head1',
    'PT700Head7',
    'PT100Head',
    'PT200Head',
    'PT200Head1',
    'PT200Head7',
    'PT100Head1',
    'PT700Head7',
    'PT100Head',
    'PT200Head',
    'PT200Head1',
    'PT200Head7',
    'PT100Head1',
    'PT700Head7',
    'PT100Head',
    'PT200Head',
    'PT200Head1',
    'PT200Head7',
    'PT100Head1',
    'PT700Head7',
]

const AddCustomerOrderScreen = ({ navigation }) => {

    const [product, setProduct] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState('')


    const onBackPress = () => {
        setModalVisible(false)
        navigation.goBack()
    }

    const handleSearch = (text) => {
        setSearch(text)
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <Text>Add Customer Order Screen</Text>
                    <Text style={styles.placeholder}>{strings.product}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <CustomTextInput
                            value={product}
                            editable={false}
                            placeholder={strings.product}
                            containerStyle={styles.emailContainer}
                            onChangeText={(text) => setProduct(text)}
                        />
                    </TouchableOpacity>
                    <CustomDropdown
                        search={search}
                        handleSearch={setSearch}
                        dataList={Products}
                        setModalVisible={setModalVisible}
                        modalVisible={modalVisible} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default AddCustomerOrderScreen;
