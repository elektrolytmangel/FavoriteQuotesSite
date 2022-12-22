import { useEffect, useState } from "react";
import backend from "../../api/backend";
import Quote from "../../model/Quote";
import Loading from "../Loading/Loading";
import QuoteCard from "../QuoteCard/QuoteCard";

const QuotesOverview = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const loadQuotes = () => {
    backend.get('quotes').then(
      response => setQuotes(response.data),
      error => console.log(error.message)
    );
  }

  useEffect(() => {
    loadQuotes();
  }, []);

  const content = quotes?.map(x => {
    return (
      <QuoteCard key={x.id} quote={x} />
    )
  });

  if (quotes.length < 1) {
    return <Loading />;
  }
  else {
    return (
      <>
        {content}
      </>
    )
  }

}

export default QuotesOverview;