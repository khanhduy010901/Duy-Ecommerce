import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { products } from "../../assets/data/data"
import { SearchItems } from "./SearchItems"

export const Hero = () => {
  // search
  const [value, setValue] = useState("")
  const onChanage = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (key) => {
    setValue(key)
    console.log("search", key)
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1>
            <label>
              Nike. <span>Just Do It.</span> Nike VN
            </label>
            <br />
            <label>
              Shoes, <span>Clothing & Accessories. </span> Nike VN
            </label>
          </h1>
          <p>Download the app to access everything Nike.<a> Get Your Great</a></p>
          <div className='search'>
            <span>All Categories</span>
            <hr />
            <input type='text' placeholder='Search Products...' onChange={onChanage} value={value} />
            <button onClick={() => onSearch(value)}>
              <BiSearch className='serachIcon heIcon' />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p>Examples: Mercurial Dream Speed 6, Nike Alphafly 2, Nike Invisible, Nike Tempo…</p>
        </div>
      </section>
    </>
  )
}
