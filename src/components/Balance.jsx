import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Balance = () => {
    const context = useContext(GlobalContext)
    const amount = context.transactions.map((transaction)=>transaction.amount)
    const balance = amount.reduce((sum,num)=>sum+=num,0).toFixed(2)
  return (
    <>
        <h4>Your Balance</h4>
        <h1>${balance}</h1> 
    </>
  )
}

export default Balance
