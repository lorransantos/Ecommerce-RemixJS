import type { Location } from '@remix-run/react';
import { useLocation } from '@remix-run/react';
import type { IProduct } from '..';

// export const loader = async () => {
//   const response = await api.get('products');
//   return response.data;
// };

interface IState extends Location {
  state: {
    product: IProduct;
  };
}

const Details = () => {
  const { state } = useLocation() as IState;

  if (!state?.product) {
    return <></>;
  }
  // const product = useLoaderData();

  return (
    <div className='w-full min-h-screen bg-neutral-900 flex flex-wrap gap-8 justify-center pt-16 pb-10'>
      <div
        // key={product.id}
        className='w-1/5 min-w-60 rounded-lg bg-neutral-800 shadow-lg shadow-black flex flex-col'
      >
        <img
          src={state.product.images[0]}
          alt={`Imagem do produto ${state.product.title}`}
          className='w-auto h-60 rounded-t-lg'
        />
        <div className='px-2 pt-2'>
          <h1 className='text-neutral-400'>{state.product.title}</h1>
          <div className='w-full h-[1px] bg-white my-1'></div>
          <p className='text-neutral-400'>{state.product.brand}</p>
        </div>
        <div className='px-2 pb-2 flex justify-between items-center'>
          <p className='text-neutral-400'>R$ {state.product.price},00</p>
          <button className='bg-neutral-200 rounded-xl py-1 px-2'>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
