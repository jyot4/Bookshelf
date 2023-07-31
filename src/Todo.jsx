import React from 'react'

function Todo() {

    const  movies= [
        {id:1,name:"KGF"},
        {id:2,name:"RRR"},
        {id:3,name:"Harry potter"},
        {id:4,name:"KDF"},
        {id:5,name:"ddlj"},
        {id:6,name:"dhh"},
        {id:7,name:"fsdg"},
        {id:8,name:"fhj"},
        {id:9,name:"john"},
        {id:10, name :"priya"}
    ]

    // let all = []
    // for (let i = 0 ; i > movies.length; i++) {
        
    //     all.push(
    //         all += movies[i]
    //      )
    // }
     
    // console.log(all[i])

  return (
   <>
   <ul>
    {
        movies.map((movie, index) =>{
            return <li key={index}>{movie.name}</li>
        })
    }
    </ul>
   </>
  )
}

export default Todo
