import { Fragment } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux'
import { selectCart } from 'redux/cart/cart-slice'

const Header = (props: any) => {
  const cart = useSelector(selectCart)

  return (
    <Fragment>
      <header className='fixed top-0 left-0 w-[100%] h-20 bg-[#8a2b06] text-white flex justify-between items-center px-14 drop-shadow-xl z-10'>
        <h1 className='font-bold text-2xl'>Products</h1>
        <button
          onClick={props.onShowCart}
          className='pointer-events-auto border-none bg-[#4d1601] text-white px-8 py-3 flex justify-around items-center rounded-3xl font-bold'
        >
          <span className='w-5 h-5 mr-2'>
            <ShoppingCartIcon />
          </span>
          <span>Your Cart</span>
          <span className='bg-[#b94517] py-1 px-4 rounded-3xl ml-4 font-bold'>
            {cart.items.length > 0 ? cart.items.length : 0}
          </span>
        </button>
      </header>
    </Fragment>
  )
}

export default Header
