import React from 'react';
import { Button, Form } from 'react-bootstrap';
import backend from '../../api/backend';
import Quote from '../../model/Quote';
import Loading from '../Loading/Loading';
import QuoteCard from '../QuoteCard/QuoteCard';
import QuotesForm from '../QuotesForm/QuotesForm';

interface Props {
  title: string,
  subtitle: string
}

interface State {
  randomQuotes: Quote[],
  randomCount: number,
}

class QuotesMainPage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      randomQuotes: [],
      randomCount: 1,
    }
  }

  loadRandomQuote = () => {
    backend.get<Quote[]>(`/${this.state.randomCount}`).then(
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
      <div style={{ justifyContent: 'center', display: '' }}>
        <h1>{this.props.title}</h1>
        <h4>{this.props.subtitle}</h4>
        <div className='mt-5'>
          {this.state.randomQuotes.length > 0 ? this.state.randomQuotes.map(x => <div key={x?.id} className="animate__animated animate__flipInX" ><QuoteCard quote={x} /></div>) : <Loading />}
        </div>
        <div style={{ display: 'flex' }}>
          <Button className='me-1' style={{ minWidth: '300px' }} onClick={() => this.loadRandomQuote()} variant='dark'>Random Quote</Button>
          <Form.Control type="number" onChange={(v) => this.setState(s => { return { randomCount: parseInt(v.target.value) } })} value={this.state.randomCount} />
        </div>
        <div className='mt-5'>
          <QuotesForm />
        </div>
      </div>
    );
  }
}

export default QuotesMainPage;