import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    login:false,
  
};

export const AuthReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.dark = action.payload;
    },
  

  
  },
  
});

export const {setLogin} = AuthReducer.actions;

export default AuthReducer.reducer;