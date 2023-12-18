import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  login: false,
  otpRoute: '',
  userToken: false,
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
  },
});

export const {setLogin, setOtpRoute, setUserToken} = userReducer.actions;

export default userReducer.reducer;
