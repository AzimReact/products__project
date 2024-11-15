import ProductList from './components/ProductList/ProductList';
import styles from './App.module.css';

function App() {
  
  return (
    <div>
      <h1 className={styles.h1}>Products</h1>
      <ProductList />
    </div>
  );
}

export default App;
