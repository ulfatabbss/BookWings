import {useSelector} from 'react-redux';
import {HTTP_APP} from './config';
import {endPoints} from './endPoints';
import axios, {AxiosInstance} from 'axios';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
const Login = (obj: any) => {
  console.log(obj);
  return HTTP_APP.post(endPoints.login, obj);
};

const Register = (obj: any) => {
  return HTTP_APP.post(endPoints.register, obj);
};
const Account_Verification = (code: any) => {
  return HTTP_APP.get(`${endPoints.verify_Account}${code}`);
};
const Get_All_Plans = (userToken: any) => {
  const HTTP: AxiosInstance = axios.create({
    baseURL: 'http://mbapp.mediasols.xyz/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: userToken ? `Bearer ${userToken}` : '',
    },
  });
  return HTTP.get(endPoints.ge_All_Plans);
};
// const Get_All_Books = () => {
//   return HTTP_APP.get(endPoints.get_all_books);
// };
const Get_All_Books = (userToken: any) => {
  const HTTP: AxiosInstance = axios.create({
    baseURL: 'http://mbapp.mediasols.xyz/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: userToken ? `Bearer ${userToken}` : '',
    },
  });

  // Return the request promise
  return HTTP.get(endPoints.get_all_books);
};
export {Login, Register, Account_Verification, Get_All_Plans, Get_All_Books};
