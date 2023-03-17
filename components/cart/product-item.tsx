import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, selectCartItemById } from 'redux/cart/cart-slice'
const ProductItem = (props: any) => {
  const price = `$${props.price.toFixed(2)}`
  const dispatch = useDispatch()
  const item = useSelector(selectCartItemById(props.id))

  const handleRemoveItem = () => {
    dispatch(removeItem(props.id))
  }

  const handleAddToCart = (product: any) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      }),
    )
  }

  return (
    <div className='flex flex-col justify-between m-4 pb-4 border-b-[1px] border-[#ccc]'>
      <div className='flex flex-col'>
        <div className='mb-1 font-bold flex text-xl'>{props.name}</div>
        <div className='mt-1 font-serif text-lg'>{props.description}</div>

        <div className='mt-1 font-bold text-[#ad5502] text-xl'>{price}</div>

        <div className='flex flex-row text-center items-center justify-between'>
          {props.photo && (
            <div>
              <img
                width={250}
                height={200}
                src={props.photo}
                alt='Product image'
              ></img>
            </div>
          )}
          <div>
            <form className='text-center'>
              <div className='mt-1 text-xl'>
                {item && item?.quantity !== 0 ? (
                  <>Amount: {item?.quantity}</>
                ) : (
                  <p>Amount: 0</p>
                )}
              </div>
              <button
                className='bg-[#8a2b06] border-2 border-[#8a2b06] text-white py-2 px-8 rounded-3xl'
                onClick={(event) => {
                  event.preventDefault()
                  handleAddToCart(props)
                }}
              >
                +
              </button>
              <button
                className='bg-[#8a2b06] border-2 border-[#8a2b06] text-white py-2 px-8 rounded-3xl'
                onClick={(event) => {
                  event.preventDefault()
                  handleRemoveItem()
                }}
              >
                -
              </button>
            </form>
            {props.photo && (
              <button
                onClick={props.submitDetails}
                className='text-left mt-3 text-[#8a2b06] bg-[#8a2b06] pointer-events-auto border-2 border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 bg-transparent'
              >
                info
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
