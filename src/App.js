import { useState,useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModelEdit from './components/ModelEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId,setEntryId]=useState();
  const [incomeTotal,setIncomeTotal] =  useState(0)
  const [expenseTotal,setExpenseTotal] =  useState(0)
  const [total,setTotal] =  useState(0)

  useEffect(() => {
    if(!isOpen&&entryId) {
      const index=entries.findIndex(entry=>entry.id===entryId)
      const newEntries = [...entries]
      newEntries[index].description=description
      newEntries[index].value=value
      newEntries[index].isExpense=isExpense
      resetEntry();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(()=>{
    let totalIncome = 0;
    let totalExpense = 0;

    entries.forEach(entry => {
      if(entry.isExpense) {
        totalExpense += Number(entry.value);
      } else {
        totalIncome += Number(entry.value);
      }
    })
    let total = totalIncome-totalExpense;
    setTotal(total)
    setIncomeTotal(totalIncome)
    setExpenseTotal(totalExpense)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[entries])

  const deleteEntry = id => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
  }

  const editEntry = id => {
    console.log(id)
    if(id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index];
      setEntryId(id)
      setDescription(entry['description'])
      setValue(entry['value'])
      setIsExpense(entry['isExpense'])
      setIsOpen(true)
    }
  }

  function addEntry() {
    /* const result = [
      ...entries, {id: entries.length+1, description, value}
    ] */
    const result = entries.concat({id: entries.length+1, description, value, isExpense})
    setEntries(result);
    resetEntry();
    console.log('result ',result)
    console.log('entries',  entries)
  }

  function resetEntry() {
    setDescription("")
    setValue("")
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
     
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines 
        entries={entries} 
        deleteEntry={deleteEntry} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}  
        editEntry={editEntry}
      />
      
      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm 
        addEntry={addEntry} 
        description={description} 
        value={value} 
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModelEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        description={description} 
        value={value} 
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id:1,
    description: 'Work Income',
    value:1000,
    isExpense: false
  },
  {
    id:2,
    description: 'Water bill',
    value:20,
    isExpense: true
  },
  {
    id:3,
    description: 'Rent',
    value:300,
    isExpense: true
  },
  {
    id:4,
    description: 'Power bill',
    value:50,
    isExpense: true
  }
]
