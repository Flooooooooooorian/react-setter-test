import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const up = () => {
      setCount(count + 1)
      setCount(count + 1)
    }

    const upArrow = () => {
        setCount(prevState => prevState +1)
        setCount(prevState => prevState +1)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={up}>+1</button>
            <button onClick={upArrow}>+1(prev {'=>'} {})</button>
        </>
    )
}

export default App
