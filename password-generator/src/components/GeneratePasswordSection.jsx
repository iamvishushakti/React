import { useState, useCallback, useEffect, useRef } from "react";
import "../assets/css/GeneratePasswordSection.css";

function GeneratePasswordSection() {
    const [passwordValue, setPasswordValue] = useState("");
    const [specialCharacter, setSpecialCharacter] = useState(false);
    const [numericValue, setNumericValue] = useState(true);
    const [lengthPassword, setLengthPassword] = useState(20);

    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numericValue) {
            chars += "0123456789";
        }

        if (specialCharacter) {
            chars += "!@#$%^&*()_+[]{}<>?/|";
        }

        let password = "";

        for (let i = 0; i < lengthPassword; i++) {
            const index = Math.floor(Math.random() * chars.length);
            password += chars.charAt(index);
        }

        setPasswordValue(password);
    }, [lengthPassword, specialCharacter, numericValue]);

    useEffect(() => {
        generatePassword();
    }, [specialCharacter, numericValue, lengthPassword, setPasswordValue, generatePassword]);


    const copyPassword = () => {
        navigator.clipboard.writeText(passwordValue);

        // Optional: Input select ho jaye
        passwordRef.current?.select();
    };

    return (
        <div className="password-container">
            <h1 className="heading">Generate Password Section</h1>

            <div className="fields-container">
                <input
                    type="text"
                    id="Password-value"
                    ref={passwordRef}
                    value={passwordValue}
                    readOnly
                />
                <button onClick={copyPassword}>Copy</button>
            </div>

            <div className="fields-container-sub">
                <input
                    type="range"
                    min={8}
                    max={100}
                    value={lengthPassword}
                    onChange={(e) =>
                        setLengthPassword(Number(e.target.value))
                    }
                />
                <span>{lengthPassword}</span>

                <label htmlFor="character">
                    <input
                        type="checkbox"
                        id="character"
                        checked={specialCharacter}
                        onChange={(e) =>
                            setSpecialCharacter(e.target.checked)
                        }
                    />
                    Special Character
                </label>

                <label htmlFor="number">
                    <input
                        type="checkbox"
                        id="number"
                        checked={numericValue}
                        onChange={(e) =>
                            setNumericValue(e.target.checked)
                        }
                    />
                    Numeric Value
                </label>
            </div>
        </div>
    );
}

export default GeneratePasswordSection;