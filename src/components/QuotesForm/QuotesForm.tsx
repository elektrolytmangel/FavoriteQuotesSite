import { useState } from 'react';
import Quote from "../../model/Quote";
import { Button, Form } from 'react-bootstrap';
import QuoteType from '../../model/QuoteType';
import backend from '../../api/backend';


const QuotesForm = () => {
  const [state, setState] = useState<Quote>(new Quote());

  const getOptions = () => {
    const options: QuoteType[] = [];
    for (const t of Object.values(QuoteType)) {
      options.push(t);
    }

    return options;
  }

  const onHandleSubmit = (e: React.FormEvent, data: Quote) => {
    e.preventDefault();
    backend.post('/quotes', data)
      .then(
        response => {
          console.log(response.data);
          alert(`Added new quote:${JSON.stringify(response.data)}`);
          setState(new Quote());
        },
        error => console.log(error?.message)
      )
  }

  return (
    <>
      <Form onSubmit={(e) => { onHandleSubmit(e, state) }}>
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" placeholder="someText" onChange={(e) => { setState({ ...state, content: e.target.value }) }} />
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="someText" onChange={(e) => { setState({ ...state, author: e.target.value }) }} />
        <Form.Label>Additional Information</Form.Label>
        <Form.Control type="text" placeholder="someText" onChange={(e) => { setState({ ...state, additionalInformation: e.target.value }) }} />
        <Form.Label>Type</Form.Label>
        <Form.Select onChange={(e) => { setState({ ...state, type: e.target.value as QuoteType }) }} >
          <option key='empty'></option>
          {getOptions().map(x => <option key={x}>{x}</option>)}
        </Form.Select>
        <Button variant='success' type='submit'>Submit</Button>
      </Form>
      <p>{JSON.stringify(state)}</p>
    </>
  )
}

export default QuotesForm;