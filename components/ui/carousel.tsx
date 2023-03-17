import React, { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { CarouselProps } from 'commonTypes'

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const onNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }

  const onPrevClick = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length,
    )
  }

  return (
    <section>
      {images ? (
        <div className='relative'>
          <div className='overflow-hidden rounded-lg flex justify-center'>
            <img
              className='max-w-md max-h-96'
              src={images[currentImageIndex]}
              alt='carousel'
            />
          </div>
          <div className='absolute inset-y-0 left-24 flex items-center'>
            <button
              onClick={onPrevClick}
              className='bg-gray-800 text-white hover:text-gray-200 rounded-full w-8 h-8 focus:outline-none transition duration-500 ease-in-out flex justify-center items-center'
            >
              <ArrowRightIcon className='h-4 w-4 transform rotate-180' />
            </button>
          </div>
          <div className='absolute inset-y-0 right-24 flex items-center'>
            <button
              onClick={onNextClick}
              className='bg-gray-800 text-white hover:text-gray-200 rounded-full w-8 h-8 focus:outline-none transition duration-500 ease-in-out flex justify-center items-center'
            >
              <ArrowRightIcon className='h-4 w-4' />
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}

export default Carousel
