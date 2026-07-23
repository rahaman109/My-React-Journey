//! Example - 1

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function FetchData() {

//   let [item, setItem] = useState(null);
//   useEffect(() =>
//   {
//     let api = async () =>
//     {
//       let {data:{products}} = await axios.get("https://dummyjson.com/products");
//       setItem(products)
//     }
//     api();
//   },[])
//   return (
//     <div>
//       <table border={1} rules='all' cellPadding={10} width="100%">
//         <thead>
//           <tr>
//             <th>SI.NO</th>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Description</th>
//             <th>Image</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             item && item.map((e) =>
//             {
//               return <tr key={e.id}>
//                 <td>{e.id}</td>
//                 <td>{e.title}</td>
//                 <td>{e.category}</td>
//                 <td>{e.description}</td>
//                 <td><img src={e.images[0]} alt={e.title} height="200" width="200"/></td>
//                 <td>$ { e.price}</td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default FetchData


//! Example 2 

import axios from 'axios'
import { useEffect, useState } from 'react';

function FetchData() {
  let [item, setItem] = useState(null);
useEffect( () =>
{
  let api = async () =>
  {
    let {data:{recipes}} = await axios.get("https://dummyjson.com/recipes"); 
    setItem(recipes);
  }
  api();
},[])  
  return (
    <div>
      <table border={1} rules='all' cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>SI.No</th>
            <th>Recipe</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            item && item.map((e) =>
            {
              return <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.cuisine}</td>
                <td>{e.ingredients}</td>
                <td>{e.instructions}</td>
                <td><img src={e.image} alt={e.name} height="200" width="200"/></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default FetchData