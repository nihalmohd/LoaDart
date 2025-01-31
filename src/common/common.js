import { AxiosInstance } from "../assets/Api/axios";

export const getMaterials = async () => {
  try { 
    const response = await AxiosInstance.get(
      `${import.meta.env.VITE_BASE_URL}/Transpoter/getAllMaterials`
    );
    if (response.data && response.data.data.length > 0) {  
      return response.data.data;
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error("Error fetching materials:", error.message);
    return "No data found";
  }
};

export const getCapacity = async () => {
    try {
      const response = await AxiosInstance.get(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getAllTruckCapacities`
      );
      if (response.data && response.data.data.length > 0) {

        return response.data.data;
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      console.error("Error fetching materials:", error.message);
      return "No data found";
    }
  };
  
  export const getTruckTypes = async () => {
    try {
      const response = await AxiosInstance.get(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getAllTruckTypes`
      );
      if (response.data && response.data.data.length > 0) {
        return response.data.data;
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      console.error("Error fetching materials:", error.message);
      return "No data found";
    }
  };
  export const getState = async () => {
    try {
      const response = await AxiosInstance.get(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getAllStates`
      );
      if (response.data && response.data.data.length > 0) {
        return response.data.data;
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      console.error("Error fetching materials:", error.message);
      return "No data found";
    }
  };

  export const getDistricts = async (state_id) => {
    try {
      const response = await AxiosInstance.get(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getDistrictsByStateId?states_id=${state_id}`
      );
      if (response.data && response.data.data.length > 0) {
        return response.data.data;
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      console.error("Error fetching materials:", error.message);
      return "No data found";
    }
  };



  