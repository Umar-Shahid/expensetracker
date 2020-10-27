import React,{useContext} from 'react';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';

export const AccountSummary = () =>{
    const {transaction} = useContext(GlobalContext);
    const amount = transaction.map(transaction => transaction.transactionamount);
    const income = amount
        .filter(item => item >0)
        .reduce((acc,item) => (acc+=item),0)
        .toFixed(2);
    const expense = (amount.filter(item => item <0).reduce((acc, item) => (acc+=item),0)* -1).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    {expense}
                </p>
            </div>
        </div>
    )
}