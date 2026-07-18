import React from 'react'
import Styles from "./header.module.css"
function Header() {
  return (
    <div>
      <h1 id={Styles.id}>Back Agian</h1>
      <p className={Styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat unde iste earum nostrum error numquam libero in cum, hic facere magnam voluptatum eaque. Dolore mollitia nemo consequatur sapiente nostrum.</p>
      <button className={Styles.btn}>Click me</button>
    </div>
  )
}

export default Header