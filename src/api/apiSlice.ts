import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';

export interface Meal {
  id: string;
  meal: string;
  category: string;
  area: string;
  instructions: string;
  img: string;
  price: number;
}

interface MealsState {
  meals: Meal[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MealsState = {
  meals: [],
  status: 'idle',
  error: null,
};

export const fetchAllMeals = createAsyncThunk('meals/fetchAllMeals', async () => {
  const response = await axios.get<Meal[]>(API_URL); 
  return response.data;
});

export const fetchMealsByCategory = createAsyncThunk('meals/fetchMealsByCategory', async (category: string) => {
  const response = await axios.get<Meal[]>(`${API_URL}?category=${category}`);
  return response.data;
});

export const fetchMealById = createAsyncThunk('meals/fetchMealById', async (id: string) => {
  const response = await axios.get<Meal>(`${API_URL}/${id}`);
  return response.data;
});

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMeals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllMeals.fulfilled, (state, action: PayloadAction<Meal[]>) => {
        state.status = 'succeeded';
        state.meals = action.payload;
      })
      .addCase(fetchAllMeals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchMealsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMealsByCategory.fulfilled, (state, action: PayloadAction<Meal[]>) => {
        state.status = 'succeeded';
        state.meals = action.payload;
      })
      .addCase(fetchMealsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchMealById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMealById.fulfilled, (state, action: PayloadAction<Meal>) => {
        state.status = 'succeeded';
        state.meals = [action.payload];
      })
      .addCase(fetchMealById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default mealsSlice.reducer;
