import AsyncStorage from '@react-native-community/async-storage';
import { apiConfig } from './Utils';
import { StorageKeys } from '../constants';
const Secrets = {
  API_URL_DEBUG: 'http://app.thermonicindia.com/api/therm_api/',
  API_URL: 'http://app.thermonicindia.com/api/therm_api/',
};
const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);

const requestTransform = request => async () => {
  const token = await AsyncStorage.getItem(StorageKeys.token);
  request.headers['x-api-key'] = token;
};

const toFormData = (params) => {
  const formData = new FormData();
  Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
  });
  return formData
}

const auth = () => {
  const login = credentials => api.post('login', toFormData(credentials));
  const logout = id => api.get(`logout/${id}`);

  return {
    login,
    logout
  };
};

const users = () => {
  api.addAsyncRequestTransform(requestTransform);
  const addUser = (userData) => api.post('register_user', toFormData(userData))
  const getUsersByRole = (role) => api.post('user_list', toFormData({ role }))

  return {
    addUser,
    getUsersByRole
  }
}

const category = () => {
  api.addAsyncRequestTransform(requestTransform);
  const categoryList = () => api.get('pro_category_list');
  const subCategoryList = () => api.get('pro_sub_category_list');
  const deleteCategory = (id) => api.post('remove_category', toFormData({ cat_id: id }));
  const deleteSubCategory = (id) => api.post('remove_sub_category', toFormData({ id }));
  const addCategory = (category_name) => api.post('add_pro_category', toFormData({ category_name }));
  const addSubCategory = (sub_category_name) => api.post('add_pro_sub_category', toFormData({ sub_category_name }));

  return {
    categoryList,
    subCategoryList,
    deleteCategory,
    deleteSubCategory,
    addCategory,
    addSubCategory
  };
}
export default {
  auth,
  category,
  users
};
