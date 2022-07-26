import {useNavigate} from "react-router-dom"

const Card = ({item}) => {
    const navigate=useNavigate()

   const {strDrink,strGlass,strAlcoholic,strDrinkThumb}=item;
  return (
    <>
        <div className='imgDiv p-2 '>
            <img className="rounded-3" src={strDrinkThumb} alt={strDrink} />
        </div>
        <h3 className='text-center'>{strDrink}</h3>
        <h5 className='text-center'>{strGlass}</h5>
        <p className='text-center fw-bold alcohol'>{strAlcoholic}</p>
        <div className='text-center'>
            <button onClick={() => navigate("/details", { state: item })} className='btn btn-success'>DETAILS</button>
        </div>
    </>

  )
}

export default Card