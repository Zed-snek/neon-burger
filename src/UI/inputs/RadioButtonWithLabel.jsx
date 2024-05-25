import React from 'react';
import style from "./RadioButtonWithLabel.module.css";

function RadioButtonWithLabel({value, name, children, className, selectedOption, onChange}) {
    return (
        <div className={style.main + ' ' + className}>
            <input
                type="radio"
                name={name}
                value={value}
                id={value}
                className={"form-check-input " + style.input}
                checked={value === selectedOption}
                onChange={onChange}
            />
            <label htmlFor={value} className={style.label}>
                {children}
            </label>
        </div>
    );
}

export default RadioButtonWithLabel;