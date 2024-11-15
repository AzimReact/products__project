import { FC } from 'react';
import styles from './productItem.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleFavorite } from '../../store/reducers/ProductSlice';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
  };
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(state => state.productReducer);

  const isFavorite = favorites.includes(product.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
  };

  return (
    <div className={styles.productItem}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>{product.price} $</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default ProductItem;
