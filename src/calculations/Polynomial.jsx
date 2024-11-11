import { useState } from 'react';
import './Polynomial.css';

function Polynomial() {
    let [coeff, setCoeff] = useState(0);
    let [expo, setExpo] = useState(0);
    const [x, setX] = useState(0);
    const [eqn, setEqn] = useState("");
    const [evaluate, setEvaluate] = useState("");

    function polynomialEqn() {
        coeff = coeff.split(" ");
        expo = expo.split(" ");

        if (coeff.length != expo.length) {
            return setEqn("Please enter an equal number of coefficients and exponents");
        }

        let coeffExpo = [];
        let constant = 0;
        let answer = ["f(x) = ", 0];

        //sorts the exponents so they are organized from highest power to lowest power
        for (let i = 0; i < expo.length; i++) {
            coeffExpo[i] = [];
            coeffExpo[i][0] = parseFloat(expo[i]);
            coeffExpo[i][1] = parseFloat(coeff[i]);
        }

        coeffExpo.sort(function (a, b) {
            return b[0] - a[0];
        });

        for (let i = 0; i < coeffExpo.length; i++) {
            //if exponent is zero, add that to constant value
            if (coeffExpo[i][0] == 0) {
                constant += parseFloat(coeffExpo[i][1]);
                continue;
            }
            //if coefficient is zero, do not include the term in the equation
            if (coeffExpo[i][1] == 0) {
                continue;
            }

            //if coefficient is positive, put a plus sign
            if (i > 0 && coeffExpo[i][1] > 0) {
                answer[0] += "+";
            }

            answer[0] += `${coeffExpo[i][1]}x^${coeffExpo[i][0]} `;
            answer[1] += coeffExpo[i][1] * Math.pow(x, coeffExpo[i][0]);
        }

        if (constant != 0) {
            answer[0] += `+${constant}`;
        }
        setEqn(answer[0]);
        setEvaluate(answer[1] = `f(${x}) = ${answer[1] + constant}`);
        return;
    }

    return (
        <div className ="polynomial">
            <h1>Polynomial Function</h1>
            <div id="contents">
                <label>Coefficients</label>
                <input type="text" value={coeff} onChange={(e) => setCoeff(e.target.value)}></input>
                <label>Exponents</label>
                <input type="text" value={expo} onChange={(e) => setExpo(e.target.value)}></input>
                <label>x Value</label>
                <input type="number" value={x} onChange={(e) => setX(e.target.value)}></input>
                <label>Polynomial Function</label>
                <input type="text" value={eqn} readOnly style={{ cursor: "no-drop" }}></input>
                <label>Polynomial Evaluation</label>
                <input type="text" value={evaluate} readOnly style={{ cursor: "no-drop" }}></input>
            </div>
            <button onClick={() => polynomialEqn()} style={{ cursor: 'pointer' }}>Calculate</button>
        </div>
    );
}

export default Polynomial;