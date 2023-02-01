import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobSlice";
import fetch from "../../utils/axios";
import { clearValues } from "./jobSlice";
import { logoutUser } from "../user/userSlice";
import authHeader from "../../utils/authHeader";

export const createJObThunk = async (job, thunkAPI) => {
  try {
    const response = await fetch.post("/jobs", job, authHeader(thunkAPI));
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized!! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteJObThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await fetch.delete(`/jobs/${jobId}`, authHeader(thunkAPI));
    thunkAPI.dispatch(getAllJobs());
    return response.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const editJObThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await fetch.patch(
      `/jobs/${jobId}`,
      job,
      authHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
