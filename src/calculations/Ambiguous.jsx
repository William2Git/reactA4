import { useState } from 'react';
import './Ambiguous.css';

function Ambiguous() {
    let [angleA, setAngle] = useState(0);
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    const [type, setType] = useState("");

    function ambiguousCase() {
        const angle = Math.PI * angleA / 180;
        //both a and b are strings and must be converted to a float so the numbers can accurately be compared
        a = parseFloat(a);
        b = parseFloat(b);
        const h = Math.round(1000 * b * Math.sin(angle)) / 1000;

        // if the angle is greater than 180 there is no triangle 
        if (angle >= Math.PI || angle <= 0) {
            return setType("No triangles exist");
        } else if (angle < Math.PI / 2) {
            if (a < h) {
                return setType("No triangles exist");
            } else if (a == h) {
                return setType("One right angled triangle exists");
            } else if (a >= b) { //if a=b, then it must be an isoceles triangle where angleA=angleB
                return setType("One triangle exists");
            } else {
                return setType("Two triangles exists (ambiguous case)");
            }
        } else if (angle > Math.PI / 2) {
            if (a <= b) {
                return setType("No triangles exist");
            } else {
                return setType("One obtuse triangle exists");
            }
        } else { //if the angle entered is 90 degrees
            if (a > b) {
                return setType("One right angle triangle exists");
            } else {
                return setType("No triangles exist");
            }
        }
    }

    return (
        <div className="amb">
            <h1>Ambiguous Case</h1>
            <div id="contents">
                <label>Angle A (Enter in Degrees)</label>
                <input type="number" value={angleA} onChange={(event) => setAngle(event.target.value)}></input>
                <label>Side a</label>
                <input type="number" value={a} onChange={(event) => setA(event.target.value)}></input>
                <label>Side b</label>
                <input type="number" value={b} onChange={(event) => setB(event.target.value)}></input>
                <label>Triangle Type</label>
                <input type="text" readOnly style={{ cursor: 'no-drop' }} value={type}></input>
            </div>
            <button onClick={() => ambiguousCase()} style={{ cursor: 'pointer' }}>Calculate</button>
        </div>
    );
}

export default Ambiguous;