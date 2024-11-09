import './App.css'
import Heron from './calculations/Heron';
import Ambiguous from "./calculations/Ambiguous";
import Newton from "./calculations/Newton";
import Polynomial from "./calculations/Polynomial";

function App() {
  return (
    <div className="container">
      <Heron/>
      <Ambiguous/>
      <Newton/>
      <Polynomial/>
    </div>
  )
}

export default App;
