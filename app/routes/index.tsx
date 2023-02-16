import { useLoaderData, useNavigate } from '@remix-run/react';
import api from '~/services/api';

export const loader = async () => {
  const response = await api.get('products');
  return response.data;
};

export default function Home() {
  const products = useLoaderData();

  const navigate = useNavigate();

  return (
    <div className='w-full min-h-screen bg-neutral-900 flex flex-wrap gap-8 justify-center pt-16 pb-10'>
      {products.products.map((product: IProduct) => {
        return (
          <div
            key={product.id}
            className='w-1/5 min-w-60 rounded-lg bg-neutral-800 shadow-lg shadow-black flex flex-col'
          >
            <img
              src={product.images[0]}
              alt={`Imagem do produto ${product.title}`}
              className='w-auto h-60 rounded-t-lg'
            />
            <div className='px-2 pt-2'>
              <h1 className='text-neutral-400'>{product.title}</h1>
              <div className='w-full h-[1px] bg-white my-1'></div>
              <p className='text-neutral-400'>{product.brand}</p>
            </div>
            <div className='px-2 pb-2 flex justify-between items-center'>
              <p className='text-neutral-400'>R$ {product.price},00</p>
              <button
                className='bg-neutral-200 rounded-xl py-1 px-2'
                onClick={() => navigate('details', { state: { product } })}
              >
                Comprar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: string;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
