import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react';

const EntryForm = ({description,value,isExpense,setDescription,setValue,setIsExpense}) => {
    return (
        <Form.Group>
          <Form.Input
            width={12}
            label="Description" 
            placeholder="New Shinny Thing"
            icon="tag"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Input 
            width={4}
            label="Value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Segment compact>
            <Checkbox 
              toggle 
              label="Is Expense" 
              checked={isExpense} 
              onChange={()=>setIsExpense(oldState => !oldState)}
            />
          </Segment>
        </Form.Group>
    )
}

export default EntryForm
