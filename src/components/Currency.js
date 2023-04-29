import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Currency() {
    const { currency, dispatch } = useContext(AppContext)
    function changeHandler(event){
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
    }
    return (
        <div>
        <select onChange={changeHandler} value={currency} name="changeCurrency" id="currency" className="alert alert-warning">
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
        </div>
    )
}

export default Currency;