import React,{useEffect,useState} from "react";
import "./Box.css";

function Box (props) {

    const [classN,SetClass] = useState("box");

    useEffect(() => {
       
        setTimeout(() => {
            SetClass("box");
        }, 1000);
    
        setTimeout(() => {
          SetClass("box-hidden");
        }, 4000);

    },[]);

    return (
      <div className={`${classN} ${props.theClass}` }></div>
    );
  }


export default Box;