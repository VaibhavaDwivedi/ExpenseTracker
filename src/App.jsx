import './App.css'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History'
import NewTransaction from './components/NewTransaction'
import { GlobalContext, GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <div>
      <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpense/>
      <History/>
      <NewTransaction/>
    </div>
    </div>
    </GlobalProvider>
  )
}

export default App
