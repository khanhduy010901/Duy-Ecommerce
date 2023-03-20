import { useState } from "react"
import { products } from "../../assets/data/data"
import { Heading } from "../../common/Heading"
import { ProductItems } from "./ProductItems"

export const Product = () => {
  const [cartItems, setCartItems] = useState(products)
  return (
    <>
      <section className='product'>
        <div className='container'>
          <Heading title='Trendings Products' desc='Wherever you are in your running journey, we will take you where you want to go. From power walks to marathons, its dependable design is there to support your every stride.' />

          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  )
}
