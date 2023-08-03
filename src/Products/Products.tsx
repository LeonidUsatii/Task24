import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../types/Product';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function loadProducts(): Promise<void> {
    const res = await fetch('https://fakestoreapi.com/products');
    const arr = await res.json();
    setProducts(arr);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="Products">
      {products.map((product) => (
        <li key={product.id}>
          <span>{product.title}</span>
          <div>
            <img src={product.image} alt={`product ${product.id}`} />
          </div>
          <span>{product.price}</span>
          <Link to={String(product.id)}>
            <span className="Back">Посмотреть</span>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Products;
