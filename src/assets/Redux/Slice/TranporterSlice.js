import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transporters_id: '',
  transporters_name: '',
  company: '',
  transporters_email: '',
  transporters_phone: '',
  brokers_id: '',
  brokers_name: '',
  brokers_email: '',
  brokers_phone: '',
  shippers_id: '',
  shippers_name: '',
  shippers_email: '',
  shippers_phone: '',
  drivers_id: '',
  drivers_name: '',
  drivers_email: '',
  drivers_phone: '',
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
      Object.assign(state, action.payload);
    },
    setBrokerData: (state, action) => {
      Object.assign(state, action.payload);
    },
    setShipperData: (state, action) => {
      Object.assign(state, action.payload);
    },
    setDriverData: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearAllData: () => initialState,
  },
});

export const { setTransporterData, setBrokerData, setShipperData, setDriverData, clearAllData } = transporterSlice.actions;
export default transporterSlice.reducer;
