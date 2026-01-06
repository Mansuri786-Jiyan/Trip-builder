import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../util/axiosInstas";

export const getAllTours = createAsyncThunk(
  "tour/getAllTours/",
  async ({ page = 1, limit = 8 }, thunkAPI) => {
    try {
      const res = await axiosInstance.get("/tour/getalltour/", {
        params: { page, limit }
      });
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch tours"
      );
    }
  }
);



export const searchTours = createAsyncThunk(
  "tour/search",
  async (searchData, thunkAPI) => {
    try {
      const { location, distance, maxGroupSize } = searchData;

      const res = await axiosInstance.get(
        `/tour/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Search failed"
      );
    }
  }
);

// GET SINGLE TOUR BY ID

export const getSingleTour = createAsyncThunk(
  "tour/getSingle",
  async (id, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/tour/search/${id}`);
      return res.data.data || res.data.tour || res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch tour"
      );
    }
  }
);


const tourSlice = createSlice({
  name: "tour",
  initialState: {
    tours: [],
    totalPages: 1,
    currentPage: 1,

    searchResults: [],
    singleTour: null,
    
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET TOURS
      .addCase(getAllTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tours = action.payload.tours;  
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        console.log(action.payload);
        
      })
      .addCase(getAllTours.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // SEARCH TOURS
      .addCase(searchTours.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(searchTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.searchResults = action.payload.tours || [];
        state.message = "";
      })
      .addCase(searchTours.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Search failed";
        state.searchResults = [];
      })

      // GET SINGLE TOUR
      .addCase(getSingleTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleTour = action.payload;
      })
      .addCase(getSingleTour.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default tourSlice.reducer;
