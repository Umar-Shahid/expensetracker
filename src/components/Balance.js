import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () =>{
    const {transaction} = useContext(GlobalContext);
    const amount = transaction.map(transaction => transaction.transactionamount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}
