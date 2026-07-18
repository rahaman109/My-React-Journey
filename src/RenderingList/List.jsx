// ! Example - 1 (Array of String)
// import React from 'react'
// let vehicles = ["Bike", "Bus", "Metro", "Car"];
// function List() {
//   return (
//     <div align= "left">
//       <ol>
//         {
//           vehicles.map((ele, index) =>
//         {
//           return <li key={index}>{ele}</li>
//         })
//         }
//       </ol>
//     </div>
//   )
// }

// export default List


//! Example - 2 (Arrays numbers)

// import React from 'react'
// let numbers = [1,2,3,4,5];
// function List() {
//   return (
//     <div align = "left">
//       <ul>
//         {
//           numbers.map((ele, index) =>
//           {
//             return <li key={index}>{ele}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default List


//! Example - 4 (movies)

// import React from 'react'

// let movies = [
//   {
//     id : 1,
//     name : "Salaar",
//     hero : "Prabhas",
//     heroine : "Shruthi Hassan"
//   },
//   {
//     id : 2,
//     name : "Jersey",
//     hero : "Nani",
//     heroine : "Sara"
//   },
//   {
//     id : 3,
//     name : "Spirit",
//     hero : "Prabhas",
//     heroine : "Tripti"
//   }
// ]
// function List() {
//   return (
//     <>
//      <h1>--- Movies Details ---</h1>
//      <hr />
//      {
//       movies.map((movie) =>
//       {
//          return <div key={movie.id}>
//           <h4>Id : {movie.id}</h4>
//           <h4>Movie name : {movie.name}</h4>
//           <h4>Hero name : {movie.hero}</h4>
//           <h4>Heroine name : {movie.heroine}</h4>
//           <hr />
//         </div>
//       })
//      }
//     </>
//   )
// }

// export default List

// ! 24 - 06 - 2026 

import React from 'react'
import MoviesInfro from './MoviesInfro'

let movies = [
  { id : 1, name : "Salaar", hero : "Prabhas", heroine : "Shruthi hassan"},
  { id : 2, name : "Jersey", hero : "Nani", heroine : "Sara"},
  { id : 3, name : "Billa", hero : "Prabhas", heroine : "Anushka"}
]

function List() {
  return (
    <div>
      {
        movies.map((movie) =>
        {
          return <MoviesInfro data = {movie} key = {movie.id}/>
        })
      }
    </div>
  )
}

export default List