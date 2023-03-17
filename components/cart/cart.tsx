import Modal from '@components/ui/modal'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, selectCart, selectCartTotal } from 'redux/cart/cart-slice'

const Cart = (props: any) => {
  const cart = useSelector(selectCart)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  const handleRemoveAll = () => {
    dispatch(clearCart())
  }

  return (
    <Modal onClose={props.onClose}>
      <ul className='list-none m-0 p-0 max-h-80 overflow-auto'>
        {cart.items.length !== 0 &&
          cart.items.map((item: any) => (
            <li key={item.id}>
              <div className='flex flex-col text-center'>
                <div className='flex justify-between text-center'>
                  <div>
                    <div className='font-bold flex text-xl'>{item.name}</div>
                  </div>
                  <div className='flex space-x-5 text-center'>
                    <p className='font-bold flex'>{item.quantity} pcs</p>
                    <p className='font-bold flex'>{item.price} $</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <div className='flex justify-between items-center font-bold text-2xl my-4 mx-0'>
        <span>Total Amount</span>
        <span>{total} $</span>
      </div>
      <div className='text-right'>
        <button
          className='text-left text-[#8a2b06] bg-[#8a2b06] pointer-events-auto border-2 border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 bg-transparent'
          onClick={props.onClose}
        >
          Close
        </button>
        <button
          onClick={handleRemoveAll}
          className='text-left bg-[#8a2b06] pointer-events-auto border-2 border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 text-white'
        >
          Clear all
        </button>
      </div>
    </Modal>
  )
}

export default Cart
