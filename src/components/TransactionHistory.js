import React, {useContext} from 'react';

//import global context
import { GlobalContext} from '../context/GlobalState';

//import transactions
import { Transaction } from './Transaction';

export const TransactionHistory = () =>{

    const {transaction} = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transaction.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction}/>))
                }
                
            </ul>
        </div>
    )
}