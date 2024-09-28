import { useState } from "react"


function App () {
  
  let [num , setNum] = useState(0)

  function increase (){
    setNum(num + 1)
  }
  
  function decrease (){
    if (num > 0){
      setNum(num - 1)
    }
  }
  
  return (
    <>
    <h1>Hello World</h1>
    <h1>{num}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
