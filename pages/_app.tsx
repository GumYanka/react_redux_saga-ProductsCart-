import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Header from '@components/layout/header'
import Footer from '@components/layout/footer'
import Cart from '@components/cart/cart'

function MyApp({ Component, pageProps }: any) {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  if (typeof window === 'undefined') {
    return <></>
  } else {
    return (
      <Provider store={store}>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    )
  }
}

export default MyApp
