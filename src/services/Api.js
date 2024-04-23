import { apiConfig } from './Utils';
const Secrets = {
  API_URL_DEBUG: 'http://app.thermonicindia.com/api/therm_api/',
  API_URL: 'http://app.thermonicindia.com/api/therm_api/',
};
const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);

const toFormData = (params) => {
  const formData = new FormData();
  Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
  });
  return formData
}

const home = () => {
  const login = credentials => api.post('login', toFormData(credentials));

  return {
    login,
  };
};
export default {
  home,
};
