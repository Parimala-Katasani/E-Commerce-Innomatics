import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
});

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  return response.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], filteredItems: [],  categories: []  },
  reducers: {
    searchProducts: (state, action) => {
      state.filteredItems = state.items.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByCategory: (state, action) => {
      if (action.payload === '') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (product) => product.category === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { searchProducts, filterByCategory } = productSlice.actions;
export const selectFilteredProducts = (state) => state.products.filteredItems;
export default productSlice.reducer;
