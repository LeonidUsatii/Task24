import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../types/Product';

function ProductPage() {
  const { productId } = useParams();
  const initialValue: Product = {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: '',
  };
  const [product, setProduct] = useState<Product>(initialValue);

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const obj = await res.json();
      setProduct(obj);
    }
    loadProduct();
  }, [productId]);

  return (
    <div>
      <span>{product.title}</span>
      <span>{product.description}</span>
      <span>{product.price}</span>
      <div>
        <img src={product.image} alt="" />
      </div>
      <Link to="../products">
        <span className="Back">К товарам</span>
      </Link>
    </div>
  );
}

export default ProductPage;
