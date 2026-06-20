import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count + 1);
    }
    return <>
    <h1>Count: {count}</h1>
    <button onClick={increment}>+1</button>
    </>
}
export default Counter;