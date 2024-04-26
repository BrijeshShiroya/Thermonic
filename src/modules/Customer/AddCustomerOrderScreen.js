import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { AddSubCategoryField, CustomBackground, CustomButton, CustomDropdown, CustomHeader, CustomTextInput, Loader } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/AddCustomerOrderScreenStyles';
import { useDispatch, useSelector } from 'react-redux';
import OrderTypes from '../../redux/OrderRedux';
import { UserType } from '../../services/Utils';


const Products = [
    'BSP200',
    'BSP600',
    'BSP900',
    'bottel2',
    'BSP800',
]

const AddCustomerOrderScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const [product, setProduct] = useState('')
    const [subCategories, setSubCategories] = useState([])
    const [count, setCount] = useState('')
    const [productName, setProductName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [remark, setRemark] = useState('')
    const [notes, setNotes] = useState('')
    const { user } = useSelector(state => state.auth)
    const { fetching } = useSelector(state => state.order)
    const { category } = useSelector(state => state.category)
    const filteredCategory = category?.map(cate => cate?.category_name)

    useEffect(() => {
        setProductName(`${product}-${subCategories?.join('-')}`)
    }, [subCategories, product, setProductName, count])


    const onBackPress = () => {
        navigation.goBack()
    }

    const addSubCategory = () => {
        setSubCategories([...subCategories, ''])
    }

    const onDelete = (index) => {

    }

    const onAddPress = () => {
        if (product !== '' && subCategories?.length > 0 && quantity != '') {
            dispatch(OrderTypes.addOrderRequest({
                client_id: user?.id,
                order_by: UserType.client,
                product_name: productName,
                quantity: quantity,
                client_remark: remark,
                client_notes: notes
            }))
        }
    }

    const onSelectSubCategory = (item, index) => {
        const _s = subCategories
        _s[index] = item
        setSubCategories(_s)
        setCount(item)
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <Text style={styles.productname}>{productName}</Text>
                    <CustomDropdown
                        placeholder={strings.product}
                        selectedValue={product}
                        setSelectedValue={(text) => setProduct(text)}
                        dataList={filteredCategory}
                        onSelectItem={(item) => {
                            setProduct(item)
                        }} />
                    {subCategories.length > 0 && <Text style={styles.subCategoryTitle}>{strings.subCategories}</Text>}
                    <FlatList extraData={subCategories} data={subCategories} renderItem={({ item, index }) =>
                        <AddSubCategoryField
                            index={index}
                            title={item}
                            onDeletePress={() => onDelete(index)}
                            onSelectPress={(item) => onSelectSubCategory(item, index)}
                        />}
                    />
                    <Text onPress={addSubCategory} style={styles.addSubcategoryTitle}>{strings.addSubCategories}</Text>
                    <Text style={styles.placeholder}>{strings.quantity}</Text>
                    <CustomTextInput
                        value={quantity}
                        keyboardType='number-pad'
                        placeholder={strings.quantity}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setQuantity(text)}
                    />
                    <Text style={styles.placeholder}>{strings.remark}</Text>
                    <CustomTextInput
                        value={remark}
                        placeholder={strings.remark}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setRemark(text)}
                    />
                    <Text style={styles.placeholder}>{strings.notes}</Text>
                    <CustomTextInput
                        value={notes}
                        placeholder={strings.notes}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setNotes(text)}
                    />
                    <CustomButton
                        title={strings.add}
                        style={styles.addCategoryButton}
                        onPress={onAddPress}
                    />
                </View>
            </CustomBackground>
            {fetching && <Loader />}
        </View>
    );
};

export default AddCustomerOrderScreen;
