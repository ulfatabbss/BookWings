import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  login: false,
  otpRoute: '',
  userToken: false,
  userData: '',
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setOtpRoute: (state, action) => {
      state.otpRoute = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {setLogin, setOtpRoute, setUserToken, setUserData} =
  userReducer.actions;

export default userReducer.reducer;
