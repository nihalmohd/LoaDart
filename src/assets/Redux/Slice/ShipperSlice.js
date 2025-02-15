import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shippers_id: '',
  shippers_name: '',
  company: '',
  shippers_email: '',
  shippers_phone: '',
  users_id: '',
  users_name: '',
  users_mobile: '',
  user_types_id: '',
};

export const shipperSlice = createSlice({
  name: 'shipper',
  initialState,
  reducers: {
    setShipperData: (state, action) => ({ ...state, ...action.payload }),
    clearShipperData: () => initialState,
  },
});

export const { setShipperData, clearShipperData } = shipperSlice.actions;
export default shipperSlice.reducer;
