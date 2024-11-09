import React from "react"

const Home = (props) => {
  const [count, setCount] = React.useState(0)
  //to set props syntax is
  
  return (
    <>
      <div>
        <h1>States and Props</h1>
        <h3>States</h3>
        <p>States are mutable</p>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <h1>Props</h1>
        <p>Props are immutable</p>
        <p>{props.message} from app.js</p>
        <h1>Callback Function</h1>
      </div>
    </>
  )
}

export default Home
