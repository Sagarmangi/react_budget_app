import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    function changeHandler(event) {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (event.target.value > 20000) {
            alert("budget can not exceed 20000")
        }
        else if (event.target.value < totalExpenses) {
            alert("You can not reduce budget value lower than spending")
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <div className="row">
            <label className="col">Budget: {currency}</label>
            <input style={{ marginLeft:"-4rem"}} max={20000} type="number" step={10} value={budget} required="required" className='col form-control' onChange={changeHandler} />
            </div>
        </div>
    );
};
export default Budget;