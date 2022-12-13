import React from 'react';
import { Button } from 'react-bootstrap';
import backend from '../../api/backend';
import Quote from '../../model/Quote';
import QuotesForm from '../QuotesForm/QuotesForm';

interface Props {
  title: string,
  subtitle: string
}

interface State {
  randomQuotes: Quote[],
}

class QuotesMainPage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      randomQuotes: [new Quote()]
    }
  }

  loadRandomQuote = () => {
    backend.get<Quote[]>('/1').then(
      response => {
        this.setState({ randomQuotes: response.data });
      },
      error => {
        console.log(error.message);
      });
  }

  componentDidMount(): void {
    this.loadRandomQuote();
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
  }

  componentWillUnmount(): void {
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h4>{this.props.subtitle}</h4>
        <Button onClick={() => this.loadRandomQuote()} variant='primary'>Random Quote</Button>
        <h4 >{JSON.stringify(this.state.randomQuotes)}</h4>
        <QuotesForm />
      </div>
    );
  }
}

export default QuotesMainPage;