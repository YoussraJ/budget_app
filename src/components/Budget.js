import React, { useContext ,useState,useEffect} from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
   
    const { budget,expenses,dispatch ,currency} = useContext(AppContext);
    const [budget1, setBudget] = useState([budget,0]);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    useEffect(()=>{
        
        if(budget1[0]<totalExpenses)
        alert("budget cannot be reduced more than expenses");
        else {
           if(budget1[0]>20000)
            alert("budget cannot exceed 20000");
           else 
           dispatch({
            type: 'SET_BUDGET',
            payload: budget1[0],
        })
          
        }
       }
        
    ,budget1);
    
    const handleDecrease = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget-10,
        });

    }

    const handleIncrease = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget+10,
        });

    }
   
    return (
        <div  className='alert alert-primary'>
        <div className="input-group">
        <label for="budget">Budget: {currency}</label>
        
          <input
            required='required'
            type="number"
            id="budget"
            className="form-control"
            value={budget}
            style={{ marginLeft: '2rem' , size: 10}}
            onChange={(e)=>{setBudget([Number(e.target.value),0]);}}
            step="10"
          />
         
        </div>
      </div>
  
        // <div className='alert alert-secondary'>
        //     <span>Budget: £{budget}</span>
        // </div>
    );
};
export default Budget;
