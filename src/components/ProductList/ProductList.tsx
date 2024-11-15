import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/reducers/ActionCreators';
import ProductItem from '../ProductItem/ProductItem';
import Filters from '../Filters/Filters';
import styles from './productList.module.css';

const ProductList: FC = () => {
  
  const dispatch = useAppDispatch();
  const { products, filter, favorites, isLoading, error } = useAppSelector(state => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter.category ? product.category === filter.category : true;
    const matchesSearch = filter.search ? product.name.toLowerCase().includes(filter.search.toLowerCase()) : true;
    const matchesFavorites = filter.showFavorites ? favorites.includes(product.id) : true;
    return matchesCategory && matchesSearch && matchesFavorites;
  });

  return (
    <div>
      <Filters />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      
      {filter.showFavorites && filteredProducts.length === 0 && (
        <h2 className={styles.h2}>Favorites is empty</h2>
      )}
      
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
