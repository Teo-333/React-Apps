import { configureStore, EnhancedStore, AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import mealsReducer, { fetchAllMeals, fetchMealsByCategory, fetchMealById, Meal } from './apiSlice';
import { RootState } from '../data/store';

global.fetch = jest.fn();

describe('meals slice', () => {
  let store: EnhancedStore<{ meals: ReturnType<typeof mealsReducer> }>;
  let dispatch: ThunkDispatch<RootState, void, AnyAction>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        meals: mealsReducer,
      },
    });
    dispatch = store.dispatch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle fetchAllMeals and update state correctly', async () => {
    const meals: Meal[] = [{ id: '1', meal: 'Meal 1', category: 'Category 1', area: 'Area 1', instructions: 'Instructions 1', img: 'img1.jpg', price: 10 }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => meals,
    });

    await dispatch(fetchAllMeals());

    const state = store.getState().meals;
    expect(state.meals).toEqual(meals);
    expect(state.status).toEqual('succeeded');
  });

  it('should handle fetchMealsByCategory and update state correctly', async () => {
    const meals: Meal[] = [{ id: '2', meal: 'Meal 2', category: 'Category 1', area: 'Area 1', instructions: 'Instructions 2', img: 'img2.jpg', price: 20 }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => meals,
    });

    await dispatch(fetchMealsByCategory('Category 1'));

    const state = store.getState().meals;
    expect(state.meals).toEqual(meals);
    expect(state.status).toEqual('succeeded');
  });

  it('should handle fetchMealById and update state correctly', async () => {
    const meal: Meal = { id: '3', meal: 'Meal 3', category: 'Category 3', area: 'Area 3', instructions: 'Instructions 3', img: 'img3.jpg', price: 30 };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => meal,
    });

    await dispatch(fetchMealById('3'));

    const state = store.getState().meals;
    expect(state.meals).toEqual([meal]);
    expect(state.status).toEqual('succeeded');
  });
});
