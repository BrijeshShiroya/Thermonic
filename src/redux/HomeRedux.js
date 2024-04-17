import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  homeBannerRequest: [],
  homeBannerSuccess: ['bannerData'],
  homeBannerFailure: ['error'],
  homeConfigRequest: [],
  homeConfigSuccess: ['config'],
  brandRequest: ['brandType'],
  brandSuccess: ['brand'],
  categoryRequest: [],
  categorySuccess: ['categories'],
  homeExclusiveProductSuccess: ['exclusiveProduct'],
  homeCategoriesSuccess: ['homeCategories'],
  homeBrandProductRequest: ['id'],
  homeCategoryProductRequest: ['id'],
  homeBrandCategoryProductSuccess: ['productList'],
  homeFilteredRequest: ['filterData'],
});

export const HomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  homeCategories: [],
  config: null,
  banners: [],
  brand: [],
  exclusiveProduct: [],
  fetching: false,
  error: null,
  categories: [],
  productList: [],
});

/* ------------- Selectors ------------- */
export const HomeSelectors = {
  getBannerData: state => state?.banners,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const requestBanner = state => state.merge({ fetching: true });

// successful api lookup
export const successBanner = (state, action) => {
  const { bannerData } = action;
  return state.merge({
    fetching: false,
    error: false,
    banners: bannerData,
  });
};

export const successConfig = (state, action) => {
  const { config } = action;
  return state.merge({
    fetching: false,
    error: false,
    config,
  });
};

export const requestBrand = state => state.merge({ fetching: true, brand: [] });
export const requestHomeBrandCategoryProduct = state =>
  state.merge({ fetching: true, productList: [] });

export const successBrands = (state, action) => {
  const { brand } = action;
  return state.merge({
    fetching: false,
    error: false,
    brand,
  });
};

export const successCategories = (state, action) => {
  const { categories } = action;
  return state.merge({
    fetching: false,
    error: false,
    categories,
  });
};

export const successExclusiveProduct = (state, action) => {
  const { exclusiveProduct } = action;
  return state.merge({
    fetching: false,
    error: false,
    exclusiveProduct,
  });
};

export const successHomeCategories = (state, action) => {
  const { homeCategories } = action;
  return state.merge({
    fetching: false,
    error: false,
    homeCategories,
  });
};

export const successHomeBrandCategoryProduct = (state, action) => {
  const { productList } = action;
  return state.merge({
    fetching: false,
    error: false,
    productList,
  });
};
// Something went wrong somewhere.
export const failureBanner = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, user: null });
};

/* ------------- Hookup Reducers To Types ------------- */

export const homeReducer = createReducer(INITIAL_STATE, {
  [Types.HOME_BANNER_REQUEST]: requestBanner,
  [Types.HOME_FILTERED_REQUEST]: requestBanner,
  [Types.HOME_BANNER_SUCCESS]: successBanner,
  [Types.HOME_BANNER_FAILURE]: failureBanner,
  [Types.HOME_CONFIG_SUCCESS]: successConfig,
  [Types.BRAND_REQUEST]: requestBrand,
  [Types.BRAND_SUCCESS]: successBrands,
  [Types.HOME_EXCLUSIVE_PRODUCT_SUCCESS]: successExclusiveProduct,
  [Types.HOME_CATEGORIES_SUCCESS]: successHomeCategories,
  [Types.CATEGORY_REQUEST]: requestBanner,
  [Types.CATEGORY_SUCCESS]: successCategories,
  [Types.HOME_BRAND_PRODUCT_REQUEST]: requestHomeBrandCategoryProduct,
  [Types.HOME_CATEGORY_PRODUCT_REQUEST]: requestHomeBrandCategoryProduct,
  [Types.HOME_BRAND_CATEGORY_PRODUCT_SUCCESS]: successHomeBrandCategoryProduct,
});
