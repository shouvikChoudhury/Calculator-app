import React, { useState } from 'react'
import "./Calc.css"

export default function Calc() {
    const [inp_val, setInp_val] = useState("");
    const opHandler = (e) => {
        if (e.target.innerHTML == "=") {
            setInp_val(eval(inp_val).toString());
        } else if (e.target.innerHTML == "C") {
            setInp_val("");
        } else if (e.target.innerHTML == "B") {
            setInp_val(inp_val.slice(0, -1));
        } else {
            setInp_val(inp_val + e.target.innerHTML);
        }
    }
    return (
        <div className='mt-5'>
            <h4 className='mb-5'>Calculator</h4>
            <input className='input' type="text" value={inp_val} readOnly />

            <div className='row bottons'>
                <button onClick={opHandler} className="col-3">(</button>
                <button onClick={opHandler} className="col-3">)</button>
                <button onClick={opHandler} className="col-3">.</button>
                <button onClick={opHandler} className="col-3">B</button>
            </div>
            <div className='row bottons'>
                <button onClick={opHandler} className="col-3">7</button>
                <button onClick={opHandler} className="col-3">8</button>
                <button onClick={opHandler} className="col-3">9</button>
                <button onClick={opHandler} className="col-3">*</button>
            </div>
            <div className='row bottons'>
                <button onClick={opHandler} className="col-3">4</button>
                <button onClick={opHandler} className="col-3">5</button>
                <button onClick={opHandler} className="col-3">6</button>
                <button onClick={opHandler} className="col-3">-</button>
            </div>
            <div className='row bottons'>
                <button onClick={opHandler} className="col-3">1</button>
                <button onClick={opHandler} className="col-3">2</button>
                <button onClick={opHandler} className="col-3">3</button>
                <button onClick={opHandler} className="col-3">+</button>
            </div>
            <div className='row bottons'>
                <button onClick={opHandler} className="col-3">0</button>
                <button onClick={opHandler} className="col-3">/</button>
                <button onClick={opHandler} className="col-3">=</button>
                <button onClick={opHandler} className="col-3">C</button>
            </div>
        </div>
    )
}
