
import { useLocation} from 'react-router-dom'


const Details = () => {
  const {state}=useLocation();

  const {strDrink,strGlass,strAlcoholic,strDrinkThumb,strCategory,strInstructions,strIngredient1,strIngredient2,strIngredient3}=state;
  
  return (
    <div className='d-flex m-auto flex-column flex-md-row container'>
      <div className='detailImgDiv m-auto mb-4 mb-md-0'>
        <img className='rounded-3'
        src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className='d-flex align-items-center m-auto'>
        <table className='m-auto border border-1 border-dark'>
          <tr >
            <td className='text-center border border-1 border-dark fw-bold'>Name</td>
            <td className='border border-1 border-dark px-2'>{strDrink}</td>
          </tr>
          <tr>
            <td className='text-center border border-1 border-dark fw-bold'>Category</td>
            <td className='border border-1 border-dark px-2'>{strCategory}</td>
          </tr>
          <tr>
            <td className='text-center border border-1 border-dark fw-bold'>Info</td>
            <td className='border border-1 border-dark px-2'>{strAlcoholic}</td>
          </tr>
          <tr>
            <td className='text-center border border-1 border-dark fw-bold'>Glass</td>
            <td className='border border-1 border-dark px-2'>{strGlass}</td>
          </tr>
          <tr>
            <td className='text-center border border-1 border-dark fw-bold'>Instructions</td>
            <td className='border border-1 border-dark px-2'>{strInstructions}</td>
          </tr>
          <tr>
            <td className='text-center border border-1 border-dark fw-bold'>Ingredients</td>
            <td className='border border-1 border-dark px-2'>{strIngredient1}{strIngredient2}{strIngredient3}</td>
          </tr>
          
        </table>
      </div>

    </div>
  )
}

export default Details