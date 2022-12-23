import Quote from "../../model/Quote";

interface Props {
  quote: Quote;
}

const QuoteCard = (props: Props) => {
  const quote = props.quote;
  return (
    <div className="my-2" style={{ border: '2px grey', borderStyle: 'solid' }} draggable>
      <div className="m-3">
        <h2>{quote.content}</h2>
        <h4 className="mb-2 text-muted">{quote.author} - {quote.additionalInformation} - {quote.type}</h4>
      </div>
    </div>
  )
}

export default QuoteCard;