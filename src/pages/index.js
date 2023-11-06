
import React from 'react'
import data from './students.json'

const index = () => {
  return (
    
    <div> 
    <div>
      
    </div>


    <h1 className='text-5xl text-center'> Student List </h1>
    {
      data.map( data => {
        return(
          <div className="box text-center text-xl p-6" key={ data.id}>
            {data.studentname} / {data.birthdate} / Grade: {data.grade} {}
          </div>
        )
      })
      
    }
    
   
    </div>
   

  )
}

export default index