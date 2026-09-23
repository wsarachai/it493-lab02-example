import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// เรียก API ด้วย path แบบ relative เสมอ ("/api/...")
// โหมด prod: Nginx ส่งต่อให้ api / โหมด dev: Vite proxy ส่งต่อให้ api
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
