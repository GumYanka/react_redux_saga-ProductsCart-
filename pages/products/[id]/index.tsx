import ProductItem from '@components/cart/product-item'
import Card from '@components/ui/card'
import Carousel from '@components/ui/carousel'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from 'redux/products/products-actions'
import { RootState } from 'redux/store'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const dispatch = useDispatch()
  const router = useRouter()
  const item = useSelector((state: any) => state.products.product)

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id))
    }
  }, [dispatch, id])

  const images = [
    `${item?.images[0]}`,
    `${item?.images[1]}`,
    `${item?.images[2]}`,
    `${item?.images[3]}`,
  ]

  return (
    <section className='max-w-5xl w-[90%] h-screen my-8 mx-auto py-24'>
      {item ? (
        <Card>
          <ul className='m-0 p-0 list-none'>
            <button
              onClick={() => router.push(`/`)}
              className='hover:text-gray-900 rounded-full w-8 h-8 focus:outline-none transition duration-500 ease-in-out flex justify-center items-center'
            >
              <ArrowRightIcon className='h-4 w-4 transform rotate-180' />
            </button>
            <div key={item.id}>
              <h3 className='m-4 font-bold flex text-2xl'>{item.brand}</h3>
              <ProductItem
                id={item.id}
                name={item.title}
                description={item.description}
                price={item.price}
                brand={item.brand}
              />
              <h3 className='mx-4'>
                <b>Discount Percentage</b>: {item.discountPercentage}
              </h3>
              <h3 className='mx-4 flex text-lg'>
                <b>Rating</b>: {item.rating}
              </h3>
              <Carousel images={images} />
            </div>
          </ul>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}

export default ProductPage
