import React from 'react'
import { useDataContext } from '../context'
import Card from './Card';

const Main = () => {
  const { cocktails } = useDataContext();
  // console.log(cocktails.length)
  return (
    <div className='mt-2'>
      <h2 className='text-center text-danger'>COCKTAILS</h2>
      <div className='cocktailsDiv container row  m-auto'>
        
          {cocktails.length==0 && <h1 className="text-center mt-5" >No Cocktail Matched</h1>}
          {cocktails.map((item)=>{
            return(
              <div key={item.idDrink} className="cardDiv col-sm-6 col-md-4 col-lg-3 container my-2 border border-1 border-dark p-1">
                <Card item={item}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Main