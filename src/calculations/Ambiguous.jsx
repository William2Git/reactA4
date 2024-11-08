import './Ambiguous.css';
import { useState } from 'react';


function Ambiguous() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [area,setArea]= useState(0);
    
    function heronFormula() {
        //the side values entered must be positive
        if (a > 0 && b > 0 && c > 0) {
            const radicand = 4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2);
            //if the number inside the radical is negative or 0, then there is no triangle
    
            if (radicand > 0) {
                return setArea( Math.round(100 * Math.sqrt(radicand) / 4) / 100);
            }
        }
        return setArea( "This triangle does not exist.");
    
    }
    console.log(a);
    return (
        <div>
            <h1>Heron's Formula</h1>
            <label>Side a</label>
            <input type="number" value={a} onChange={(event) => setA(event.target.value)}></input>
            <label>Side b</label>
            <input type="number" value={b} onChange={(event) => setB(event.target.value)}></input>
            <label>Side c</label>
            <input type="number" value={c} onChange={(event) => setC(event.target.value)}></input>
            <label>Area of the Triangle</label>
            <input type="text" readOnly value={area}></input>
            <button onClick={()=>heronFormula()}>Calculate</button>


        </div>
    )
    
}

export default Ambiguous;