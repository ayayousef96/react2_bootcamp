import React ,{useState,useEffect} from "react";
import "./Task.css"

function Task(props) {
    const [update,setUpdate]=useState("")

 useEffect(()=>{
    setUpdate(props.text);
    //localStorage.setItem(setUpdate,update);
 },[update]);

  
  const handleNewInput=(event)=>{
    setUpdate(event.target.value);
    
  }

  

  const handleClickDelete=()=>{
   props.delete(props.id);
  }
  

  return (
     <div className="task">
      <textarea rows="11" cols="25" value={update} onChange={handleNewInput}/>
      {/* <input type="checkbox" className="checkbox-style" value={"x"}/> */}
      <button className="btn-style delete" onClick={handleClickDelete}>Delete</button>
  
    </div>
  );
  }


export default Task;