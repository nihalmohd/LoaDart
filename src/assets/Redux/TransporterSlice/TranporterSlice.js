import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transporters_id: '',
  transporters_name: '',
  company: '',
  transporters_email: '',
  transporters_phone: '',
  users_id: '',
  users_name: '',
  users_mobile: '',
  user_types_id: '',
};

export const transporterSlice = createSlice({
  name: 'transporter',
  initialState,
  reducers: {
    setTransporterData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearTransporterData: () => initialState,
  },
});

export const { setTransporterData, clearTransporterData } = transporterSlice.actions;
export default transporterSlice.reducer;
