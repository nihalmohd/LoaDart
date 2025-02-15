import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drivers_id: '',
  drivers_name: '',
  license_number: '',
  drivers_email: '',
  drivers_phone: '',
  users_id: '',
  users_name: '',
  users_mobile: '',
  user_types_id: '',
};

export const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setDriverData: (state, action) => ({ ...state, ...action.payload }),
    clearDriverData: () => initialState,
  },
});

export const { setDriverData, clearDriverData } = driverSlice.actions;
export default driverSlice.reducer;
