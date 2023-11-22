import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const History = () => {
    const context = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {context.transactions.map((transaction,id)=>{
            return <Transaction key={id} transaction={transaction}/>
        })}
      </ul>
    </>
  )
}

export default History
