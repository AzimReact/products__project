import { FC } from 'react';
import { setFilter } from '../../store/reducers/ProductSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import styles from './filters.module.css';

const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const { category, search, showFavorites } = useAppSelector(state => state.productReducer.filter);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ search: e.target.value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter({ category: e.target.value }));
  };

  const handleFavoritesToggle = () => {
    dispatch(setFilter({ showFavorites: !showFavorites }));
  };

  return (
    <div className={styles.filters}>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by product name"
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="iPhones">Iphones</option>
        <option value="Laptops">Laptops</option>
        <option value="AirPods">Airpods</option>
      </select>
      <div >
        <label className={styles.favorite}>
          Favorites
          <input
            type="checkbox"
            checked={showFavorites}
            onChange={handleFavoritesToggle}
          />
        </label>
      </div>
    </div>
  );
};

export default Filters;
