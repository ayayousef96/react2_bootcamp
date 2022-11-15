import React , {useState ,useId} from "react";
import "./App.css";
import Task from "./components/Task/Task";
import { v4 as uniqId } from "uuid";


  function App (props) {

    const [userinput,setInput] = useState("");
    const [tasks,setTasks] =useState([]);
 

    const handleInput = (event) => {
    setInput(event.target.value);
    };

  
    const createTask = () => {
      const taskid = uniqId();
      console.log(taskid)
      setTasks([...tasks, { id: taskid, text: userinput }]);
    };

  const displayTasks = () => {
    return tasks.map((task) => {
      return (
        <div key={task.id}>
          <Task
            id={task.id}
            text={userinput}
            delete={handleDelete}
          />
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