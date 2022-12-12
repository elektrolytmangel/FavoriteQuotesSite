import './App.css';
import QuotesMainPage from './components/QuotesMainPage/QuotesMainPage';

function App() {
  return (
    <div className="App">
      <QuotesMainPage
        title='My Favourite Quotes'
        subtitle='This website is the entry point to my favourite quotes.' />
    </div>
  );
}

export default App;