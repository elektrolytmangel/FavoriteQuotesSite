import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import backend from "../../api/backend";
import Quote from "../../model/Quote";
import QuoteCard from "../QuoteCard/QuoteCard";

const QuotesOverview = () => {
  const [quotes, setQuotes] = useState<Quote[]>();

  useEffect(() => {
    backend.get('quotes').then(
      response => setQuotes(response.data),
      error => console.log(error.message)
    );
  }, []);

  const content = quotes?.map(x => {
    return (
      <Carousel.Item key={x.id} >
        <QuoteCard quote={x} />
      </Carousel.Item>
    )
  })
  return (
    <Carousel variant="dark">
      {content}
    </Carousel>
  )
}

export default QuotesOverview;