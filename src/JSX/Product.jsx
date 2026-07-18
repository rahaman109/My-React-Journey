function Product() {

  let product = {
    name: "parle - g",
    Price: 5,
    availability: true
  }

  let{name, Price, availability} = product;
  return (
    <div>
      <h1>{name}</h1>
      <p>{Price}</p>
      {availability ? "In stock 😁" : " Out of stock 🥺"}
    </div>
  )
}

export default Product