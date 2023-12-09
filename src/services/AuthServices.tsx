import {HTTP_APP} from './config';
import {endPoints} from './endPoints';

const Login = (obj: any) => {
  return HTTP_APP.post(endPoints.login, obj);
};
const Register = (obj: any) => {
  console.log(obj, 'signupjjjkkkjkfhdjfejdhjewkdjekdjejdkn');

  return HTTP_APP.post(endPoints.register, obj);
};
const Account_Verification = (obj: any, otp: any) => {
  console.log(obj, 'signupjjjkkkjkfhdjfejdhjewkdjekdjejdkn');

  return HTTP_APP.post(`${endPoints.verify_Account}${otp}`, obj);
};
export {Login, Register, Account_Verification};
