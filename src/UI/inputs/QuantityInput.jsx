import React from 'react';
import style from "./QuantityInput.module.css";

function QuantityInput({value, changeQuantity}) {

    function handleChange(event) {
        const value = parseInt(event.target.value)
        changeQuantity(value)
    }

    return (
        <div>
            <input type="number" min={0} value={value} className={style.input} onChange={handleChange} />
        </div>
    );
}

export default QuantityInput;