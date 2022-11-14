import React ,{useState,useEffect} from "react";
import './App.css';

function App() {
  const [favoriteColor , SetFavoriteColor] = useState('');
  
  useEffect(() => {
    SetFavoriteColor("blue");
  },[])


  return (
    <>
    
    <h1>my favorite is color {favoriteColor}</h1>

    </>
    
    
   
  );
}

export default App;
