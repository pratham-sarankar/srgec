import { useState } from "react";

function Todolist(){
    const [todoInput,setTodoInput] = useState("");
    const [todos, setTodos] = useState([]);
    const handleAddTodo = () => {
        console.log(todoInput);
        setTodos([...todos, todoInput]);
    }
    return <>
    <input type="text" placeholder="Add a task" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
    <button onClick={handleAddTodo}>Add</button>
    <ul>
    {
        todos.map((todo) => {
            return <li>{todo}</li>
        })
    }
    </ul>
    </>
}
export default Todolist;