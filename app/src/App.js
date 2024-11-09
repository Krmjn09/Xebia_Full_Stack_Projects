import React from "react"

import { BrowserRouter, Route, Switch , Routes} from "react-router-dom"

import Home from "./Pages/Home.jsx"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home message ="Hello from Props"/>} />
    </Routes>
        
    </BrowserRouter>
  )
}
export default App
