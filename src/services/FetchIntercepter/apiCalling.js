import {BASE_URL, showToast} from '../../utils';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    // const token = store.getState().root.user?.token;

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const handleError = error => {
  let parsed_error = Object.assign({}, error);
  console.log('Inside handleError', parsed_error);
  if (
    parsed_error.code == 'ECONNABORTED' &&
    !parsed_error.config.__isRetryRequest
  ) {
    parsed_error.config.__isRetryRequest = true;
    return API.request(parsed_error.config);
  }
  showToast('Error', parsed_error?.response?.data?.message, false);
  return Promise.reject(parsed_error?.response?.data);
};

/**
 * api response interceptor
 * @param {Object} response response object
 * @returns
 */
const handleResponse = response => {
  return Promise.resolve(response.data);
};

axiosInstance.interceptors.response.use(handleResponse, handleError);

// post method without token
export const POSTAPI = async (endPoint, body, loading, isFormData) => {
  const headers = {
    'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
  };
  const res = TryCatch(await axiosInstance.post(endPoint, body, {headers}));
  return res;
};

// get method without body
export const GETAPI = async endPoint =>
  TryCatch(await axiosInstance.get(endPoint));

// update api
export const UPDATEAPI = async (endPoint, body, loader = true) => {
  const res = TryCatch(await axiosInstance.put(endPoint, body));
  return res;
};
export const PATCHAPI = async (endPoint, body) => {
  const res = TryCatch(await axiosInstance.patch(endPoint, body));
  return res;
};
export const DELETEAPI = async (endPoint, loader = true) => {
  const res = TryCatch(await axiosInstance.delete(endPoint));
  return res;
};

async function TryCatch(apiCall) {
  try {
    const data = await apiCall;
    if (data?.data?.status == 'error') {
      showToast('Error', data?.data.message, false);
    }
    return data;
  } catch (err) {
    console.log('err', err?.response.data.message);
    showToast('Error', err?.response.data.message, false);
    return false;
  }
}
