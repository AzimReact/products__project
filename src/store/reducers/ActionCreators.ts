import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";

const BASE_URL = process.env.REACT_APP_API_URL

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchAll',
  async () => {
      const response = await axios.get<Product[]>(`${BASE_URL}/products`);
      return response.data;
  }
);