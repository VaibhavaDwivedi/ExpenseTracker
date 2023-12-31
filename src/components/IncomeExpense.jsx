import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {
    const context = useContext(GlobalContext)

    const amount = context.transactions.map(transaction=>transaction.amount)
    const income = amount.filter(bal=>{return bal>0}).reduce((sum,num)=>sum+num,0).toFixed(2)
    const expense = amount.filter(bal=>{return bal<0}).reduce((sum,num)=>sum+num,0).toFixed(2)

  return (
    <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div> 
    </div>
  )
}

export default IncomeExpense
