import { useReducer } from "react";
import "./styles.css"

function reducer() {
  
}

function App() {
  const [state, dispatch] = useReducer(reducer)
  return (
    <div className="project-grid">
      <div className="display">
        <div className="prev-op"></div>
        <div className="cur-op"></div>
      </div>
      <button className="size-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="size-two">=</button>
    </div>
  )
}

export default App;
