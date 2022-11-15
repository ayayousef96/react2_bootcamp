import React , {useState ,useEffect} from "react";
import "./App.css";
import Task from "./components/Task/Task";
import { v4 as uniqId } from "uuid";


  function App (props) {

    const [userinput,setInput] = useState("");
    const [tasks,setTasks] = useState([JSON.parse(localStorage.tasks)]);
    const [buttonText,setButtonText]=useState("X");
 

    const handleInput = (event) => {
    setInput(event.target.value);
    };

    useEffect(() => {
      const dataToLS = JSON.stringify(tasks);
      localStorage.setItem('tasks', dataToLS);
    }, [tasks]);

  
    const createTask = () => {
      const taskid = uniqId();
      console.log(taskid)
      setTasks([...tasks, { id: taskid, text: userinput , check:false }]);
     
    };

    const handleCheck = () =>{
      buttonText ===  "X"? setButtonText("V"):setButtonText("X");
        

    }

  const displayTasks = () => {
    return tasks.map((task) => {
      return (
        <div key={task.id}>
          <Task
            id={task.id}
            text={userinput}
            delete={handleDelete}
          />
          <button onClick={handleCheck}>{buttonText}</button>
          
          
        </div>
      );
    });
  };

 
  const handleDelete = (id) => {
    const ListFiltered = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(ListFiltered);
    
  };

 
 

 
return (
    <div className="app-container">
      <input
        type="textarea"
        className="input-style"
        onChange={handleInput}
        value={userinput}
      />
      <button className="add-task-style" onClick={createTask}>
        Add TODO Task
      </button>
      <div className="tasks-container"> {displayTasks()}</div>
    </div>
  );
  
}

export default App;