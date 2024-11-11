import { useState } from 'react';
import './Newton.css';

function Newton() {
    let [guess, setG] = useState(0);
    let [root, setRoot] = useState("");

    function newtonMethod() {
        root = guess;
        console.log(guess);

        do {
            guess = root;
            let original = 6 * Math.pow(guess, 4) - 13 * Math.pow(guess, 3) - 18 * Math.pow(guess, 2) + 7 * guess + 6;
            let derivative = 24 * Math.pow(guess, 3) - 39 * Math.pow(guess, 2) - 36 * guess + 7;

            root = guess - original / derivative;
        } while (Math.abs(guess - root) > 0.0001)

        return setRoot(Math.round(root * 10000) / 10000);
    }

    return (
        <div className ="newton">
            <h1>Newton's Method</h1>
            <div id="contents">
                <label>Root Guess</label>
                <input type="number" value={guess} onChange={(event) => setG(event.target.value)}></input>
                <label>Root Approximation</label>
                <input type="text" readOnly style={{ cursor: "no-drop" }} value={root}></input>
            </div>

            <button onClick={() => newtonMethod()} style={{ cursor: 'pointer' }}>Calculate</button>
        </div>
    );
}

export default Newton;