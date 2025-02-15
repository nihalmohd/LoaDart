import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brokers_id: '',
  brokers_name: '',
  company: '',
  brokers_email: '',
  brokers_phone: '',
  users_id: '',
  users_name: '',
  users_mobile: '',
  user_types_id: '',
};

export const brokerSlice = createSlice({
  name: 'broker',
  initialState,
  reducers: {
    setBrokerData: (state, action) => ({ ...state, ...action.payload }),
    clearBrokerData: () => initialState,
  },
});

export const { setBrokerData, clearBrokerData } = brokerSlice.actions;
export default brokerSlice.reducer;