import { createContext,useContext,useEffect,useState } from "react";
import axios from "axios"


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const DataContext = createContext();

export const useDataContext = () => {
    return useContext(DataContext);
  };


const DataContextProvider = ({children})=>{
    const [cocktails,setCocktails]=useState([])
    const [search,setSearch]=useState("a")

    const getData = async()=>{
        try{
            const {data}=await axios.get(`${url}${search}`)
            if(data.drinks){
                 setCocktails(data.drinks)
           
            }else{
                setCocktails([])
            }
           
        }catch(error){
            console.log(error);
           
        }
    }
    useEffect( () => {
        getData()
    }, [search])

 return <DataContext.Provider value={{cocktails,setCocktails,search,setSearch}}>{children}</DataContext.Provider>
}

export default DataContextProvider