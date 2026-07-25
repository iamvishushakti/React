import { useState, useEffect, useCallback } from "react";
import "./Currency.css";

function CurrencyConverter() {
    const [Currency1, setCurrency1] =  useState("USD");
    const [Currency2, setCurrency2] =  useState("INR");

    const [amount1, setAmount1] =  useState(0);
    const [amount2, setAmount2] =  useState(0);
    const [amount3, setAmount3] =  useState(0);

    const [CurrencyCode, setCurrencyCode] = useState(["USD", "INR", "GBP", "EUR" ]);

    const [errorMessage, setErrorMessage] = useState('');

    const swapCurrrency = useCallback(()=>{
        const companyCur1 = Currency1;
        setCurrency1(Currency2);
        setCurrency2(companyCur1);
    },[Currency1, Currency2]);

    const currencyConverterFunction = useCallback(async function(){
        fetch(`https://open.er-api.com/v6/latest/${Currency1}`)
        .then((response) => response.json())
        .then((data) => {
            setCurrencyCode(Object.keys(data.rates));
            
            const rate = data.rates[Currency2];
            setAmount3(rate.toFixed(2));
            setAmount2((rate * amount1).toFixed(2));
        })
        .catch((error) => {
            setErrorMessage(error);
        });
    },[amount1, Currency1, Currency2]);

    useEffect(function(){
        currencyConverterFunction();
    },[currencyConverterFunction]);

    return (
    <div className="currency-wrapper">
        <div className="currency-container">
        <h2>💱 Currency Converter</h2>

        <div className="currency-card">

            <div className="currency-row">
            <label>From</label>

            <div className="input-group">
                <input
                type="number"
                value={amount1}
                step="0.1"
                onChange={(e) => setAmount1(Number(e.target.value))}
                />

                <select
                value={Currency1}
                onChange={(e) => setCurrency1(e.target.value)}
                >
                {CurrencyCode.map((data) => (
                    <option key={data} value={data}>
                    {data}
                    </option>
                ))}
                </select>
            </div>
            </div>

            <div className="swap-icon" onClick={()=>{swapCurrrency()}}>⇅</div>

            <div className="currency-row">
            <label>To</label>

            <div className="input-group">
                <input type="text" value={amount2} readOnly />

                <select
                value={Currency2}
                onChange={(e) => setCurrency2(e.target.value)}
                >
                {CurrencyCode.map((data) => (
                    <option key={data} value={data}>
                    {data}
                    </option>
                ))}
                </select>
            </div>
            </div>

            <div className="rate-box">
            <p>
                <strong>1 {Currency1}</strong> ={" "}
                <strong>{amount3} {Currency2}</strong>
            </p>
            </div>

        </div>
        </div>
    </div>
    );
}

export default CurrencyConverter;