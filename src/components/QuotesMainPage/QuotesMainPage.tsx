import React from 'react';
import { Button } from 'react-bootstrap';
import backend from '../../api/backend';
import Quote from '../../model/Quote';

interface Props {
  title: string,
  subtitle: string
}

interface State {
  randomQuote: Quote[],
}

class QuotesMainPage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      randomQuote: [new Quote()]
    }
  }

  loadRandomQuote = () => {
    backend.get('/1').then(
      response => {
        this.setState({ randomQuote: response.data });
      },
      error => {
        console.log(error);
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
        <h4 >{JSON.stringify(this.state.randomQuote)}</h4>
      </div>
    );
  }
}

export default QuotesMainPage;