import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';
import { fetchProducts } from './ActionCreators';

export type FilterState = {
    category: string;
    search: string;
    showFavorites: boolean;
}

type ProductState = {
    products: Product[];
    isLoading: boolean;
    error: string;
    favorites: number[];
    filter: FilterState;
};

const initialState: ProductState = {
    products: [],
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
    filter: {
      category: '',
      search: '',
      showFavorites: false,
    },
    isLoading: false,
    error: ''
};

export const productSlice = createSlice( {
     name: 'product',
     initialState,
     reducers: {
        toggleFavorite(state, action: PayloadAction<number>) {
            const productId = action.payload;
            if (state.favorites.includes(productId)) {
               state.favorites = state.favorites.filter(id => id !== productId);
            } else {
               state.favorites.push(productId);
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        setFilter(state, action: PayloadAction<Partial<FilterState>>) {
            state.filter = { ...state.filter, ...action.payload };
        },
     },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.isLoading = false;
                state.error = '';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload;
            } else {
                state.error = 'An error occurred while fetching users.';
            }
            })
        },

})

export const { toggleFavorite, setFilter } = productSlice.actions;
export default productSlice.reducer;