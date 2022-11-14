import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import './App.css'

function App (){
    
    const [joke,setJoke] = useState(``);
    const [categoryToSeek,setCategoryToSeek] = useState(``);
    const [jokesCategories,setJokesCategories] = useState([]);
    const [isCategoryClicked,setIsCategoryClicked] = useState(false);

    useEffect(()=>{
        let res;
        const Fetch=async()=>{
            res = await axios.get('https://api.chucknorris.io/jokes/categories');
            setJokesCategories(res.data.map((e)=>{
                return <button value={e} onClick={getCategory} className="btn">{e}</button>
            }))
        }
        Fetch();
    },[])

    const getCategory = (e) => {
      setCategoryToSeek(e.target.value);
      setIsCategoryClicked(true);
  }

    const getJoke = async () => {
        const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${categoryToSeek}`)
        setJoke(res.data.value);
    }

    

        return (
            <div>
                <h1>Chuck Norris</h1>
                <h2>choose joke category</h2>
                {jokesCategories}
                <div><p>{joke}</p></div>
               <button style={{visibility:"hidden"}} className="btn" onClick={getJoke}>JOKE</button>
            </div>
        )
    
}

export default App;