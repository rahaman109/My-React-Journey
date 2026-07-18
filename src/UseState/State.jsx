import React, { useState } from 'react'

function State() {
  let [courseName, setCourseName] = useState("ReactJS");
  let [quantity, setQuantity] = useState(1);
  let [isOnline, setIsOnline] = useState(true);
  let [course, setCourse] = useState(["Html"]);
  let [employee, setEmployee] = useState(
    {
     id: 101,
     department: "Development"
    }
  )

  let {id, department} = employee;

  let [product, setProduct] = useState([{
    id:1,
    product:"Laptop"
  }])


  let handleCourse = () =>
  {
    setCourseName(courseName === "ReactJS" ? "Angular" : "ReactJS")
  }

  let handleIncreaseQuantity = () =>
  {
    setQuantity(quantity + 1);
  }
  
  let handleDecreaseQuantity = () =>
  {
    setQuantity(quantity - 1);
  }

  let handleStatus = () =>
  {
    setIsOnline(!isOnline);
  }

  let handleCss = () =>
  {
    setCourse([...course, "Css"]);
  }

  let handleJavaScript = () =>
  {
    setCourse([...course, "JavaScript"]);
  }

  let handleReset = () =>
  {
    setCourse(["Html"]);
  }

  let handleId = () =>
  {
    setEmployee({
      ...employee,
      id:id+1
    })
  }

  let handleDepartment = () =>
  {
    setEmployee(
    {
      ...employee,
      department: department === "Development"? "Testing" : "Development"
    })
  }

  let handleAddProduct = () =>
  {
    setProduct([
      ...product,
      {
        id:product.length+1,
        product: "Charger"
      }
    ])
  }

  let handleRemoveProduct = () =>
  {
    setProduct(product.slice(0,-1))
  }

  return (
    <div>
      <h1>Course : {courseName}</h1>
      <button onClick={handleCourse}>Change Course</button>
      <hr />
      <h1> Quantity : {quantity}</h1>
      <button onClick={handleIncreaseQuantity}>Increase Quantity</button>
      <br />
      <button onClick={handleDecreaseQuantity}>Decrease Quantity</button>
      <hr />
      <h1>Status : {isOnline == true? "Online":"Offline"}</h1>
      <button onClick={handleStatus}>Check Status</button>
      <hr />
      <h1>Lits of courses</h1>
      <ol>
        {
          course.map((item, index) =>
          {
            return <li key={index}>{item}</li>
          })
        }
      </ol>
      <button onClick={handleCss}>Add Css</button>
      <br />
      <button onClick={handleJavaScript}>Add JavaScript</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <hr />
      <h4>Employee Id : {id}</h4>
      <h4>Employe Department : {department}</h4>
      <button onClick={handleId}>Change ID</button>
      <br />
      <button onClick={handleDepartment}>Change Department</button>
      <hr />
      <h1>Product List</h1>
      <ul>
        {
          product.map((item) =>
          {
            return <li key={item.id}>{item.id} --- {item.product}</li>
          })
        }
      </ul>
      <button onClick={handleAddProduct}>Add Product</button>
      <br />
      <button onClick={handleRemoveProduct}>Remove Product</button>
    </div>
  )
}

export default State