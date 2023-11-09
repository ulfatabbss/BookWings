import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
 login:false,
 otpRoute:'',
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
    }
  },
  
});

export const {setLogin,setOtpRoute} = userReducer.actions;

export default userReducer.reducer;