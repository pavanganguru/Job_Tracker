import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import fetch from "../../utils/axios";
import { clearValues } from "./jobSlice";
import { logoutUser } from "../user/userSlice";

export const createJObThunk = async (job, thunkAPI) => {
  try {
    const response = await fetch.post("/jobs", job);
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
    const response = await fetch.delete(`/jobs/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return response.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const editJObThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await fetch.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
