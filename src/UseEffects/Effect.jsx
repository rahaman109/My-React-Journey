import React, { useEffect, useState } from 'react'
import UnMount from './UnMount';

function Effect() {

  //@ State
  let[name, setName]=useState("Thala");
  let[age,setAge]= useState(23);
  let[salary, setSalary]= useState(100000)

  let handleName = () =>
  {
    setName("Dhoni");
  }

  let handleAge = () =>
  {
    setAge(age + 1);
  }

  let handleSalary = () =>
  {
    setSalary(salary + 10000);
  }


  //@ Effects 

  //! UseEffect without Dependency
  // useEffect(() =>
  // {
  //   console.log("UseEffect Act like as a componentDidUpdate ...");
  // })

  //! Useeffect with Empty Dependency

  // useEffect(() =>
  // {
  //   console.log("Useffect Act like as a componentDidMount ...")
  // },[])

  //! UseEffect with Dependency

  useEffect(() =>
  {
    console.log("UseEffect Running ...")
  }, [name, age, salary])

  return (
    <div align="left">

      {age <= 30 && <UnMount/>}
      <h1>Name: {name}</h1>
      <button onClick={handleName}>Change Name</button>

      <h2>Age: {age}</h2>
      <button onClick={handleAge}>Change Age</button>

      <h2>Salary: {salary}</h2>
      <button onClick={handleSalary}>Change Salary</button>
    </div>
  )
}

export default Effect