import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="2,550.43" size="small" />
     
      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine  description="Income" value="$10,000" />
      <EntryLine  description="Expense" value="$10,000" isExpense />
      
      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
      
    </Container>
  );
}

export default App;
