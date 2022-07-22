import React, {useState} from "react";


function Counter(){
    const [count, setCount] = useState(100)

    return (
        <div>
            <h2>{count}</h2>
            <br></br>
            <button onClick={() => setCount(count+100)}>Click Plus</button>
            <br></br>
            <button onClick={() => setCount(count-200)}>Click Minus</button>

        </div>

    )
}

export default Counter;