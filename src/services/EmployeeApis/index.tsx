import {View, Text} from 'react-native';
import React from 'react';
import {GETAPI} from '../FetchIntercepter/apiCalling';
import {Endpoints} from '../../utils/Endpoints';

const getEmployeeList = async () => {
  return await GETAPI(Endpoints.EMPLOYEES_LIST);
};
const getSingleEmployee = async (id: number) => {
  return await GETAPI(`${Endpoints.EMPLOYEES_LIST}/${id}`);
};

export const EmployeeApis = {
  getEmployeeList,
  getSingleEmployee,
};
