import React from "react";
import { useRef,useEffect } from "react";
import { useDataContext } from "../context";

const Form = () => {
  const {setSearch} = useDataContext();
  const searchValue=useRef(" ")

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleChange =()=>{
    setSearch(searchValue.current.value)
  }
  console.log(searchValue.current.value);
  return (
    <div className="form m-auto text-center">
      <form onSubmit={handleSubmit}>
      <label className="fw-bold fs-4 text-primary" htmlFor="text">Search Your Favourite Cocktail</label>
        <input type="text" id="text" className="search fs-5 mt-2" ref={searchValue} onChange={handleChange} />
      </form>
    </div>
  );
};

export default Form;
