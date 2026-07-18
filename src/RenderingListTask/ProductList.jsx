import React from 'react'

function ProductList({data:{productName, productPrice}}) {
  return (
    <>
    <div align = "left">
      <h2>Here Product Details</h2>
      <h4>Product Name: {productName}</h4>
      <h4>Product Price: {productPrice}</h4>
    </div>
    <hr />
    </>
  )
}

export default ProductList