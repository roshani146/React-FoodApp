import React,{useState, useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Recipes from "./Recipes";
import Axios from "axios";

function App() {

  const [search, setSearch] = useState("Banana");
  const [recipes, setRecipes] = useState([]);
  const onInputChange = (e)=>{
    setSearch(e.target.value);
  };
  const onSearchClick= () =>{
    getRecipes();
  };


  const APP_ID = "e4edf1f6";
  const APP_KEY = "4ad5d6d8f714b95602639ce566838889";
  useEffect(() => {
    getRecipes();
  }, []);



    const getRecipes = async()=>{
    const resultData=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    setRecipes(resultData.data.hits);
  };
  
  return (
    <div className="App">
      <Header search={search} 
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
        />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
