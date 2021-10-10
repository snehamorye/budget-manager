import React from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input
            width={12}
            label="Description" 
            placeholder="New Shinny Thing"
            icon="tag"
          />
          <Form.Input 
            width={4}
            label="Value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
          />
        </Form.Group>
        <ButtonSaveOrCancel />
      </Form>
    )
}

export default NewEntryForm
