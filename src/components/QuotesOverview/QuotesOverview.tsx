import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import backend from "../../api/backend";
import Quote from "../../model/Quote";
import QuoteCard from "../QuoteCard/QuoteCard";
import { FaRegTrashAlt } from 'react-icons/fa';
import Loading from "../Loading/Loading";

const QuotesOverview = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [index, setIndex] = useState<number>(0);

  const loadQuotes = () => {
    backend.get('quotes').then(
      response => setQuotes(response.data),
      error => console.log(error.message)
    );
  }

  const onTrash = (i: number, quotes: Quote[]) => {
    const toDelete = quotes[i];
    backend.delete(`/quotes/${toDelete.id}`).then(
      response => {
        console.log(response.data);
        loadQuotes();
      },
      error => console.log(error.message)
    );
  }

  useEffect(() => {
    loadQuotes();
  }, []);

  const content = quotes?.map(x => {
    return (
      <Carousel.Item key={x.id} >
        <div className="container d-flex justify-content-center">
          <div className="w-75 m-5">
            <QuoteCard quote={x} />
          </div>
        </div>
      </Carousel.Item>
    )
  });

  if (quotes.length < 1) {
    return <Loading />;
  }
  else {
    return (
      <>
        <Carousel activeIndex={index} onSelect={i => setIndex(i)} variant="dark" className="align-items-center d-flex border-bottom">
          {content}
        </Carousel>
        <div className="justify-content-center d-flex mt-5">
          <FaRegTrashAlt size={'10em'} onDrop={e => onTrash(index, quotes)} onDragOver={e => e.preventDefault()} />
        </div>
      </>
    )
  }

}

export default QuotesOverview;