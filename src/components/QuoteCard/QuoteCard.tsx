import Quote from "../../model/Quote";

interface Props {
  quote: Quote;
}

const QuoteCard = (props: Props) => {
  const quote = props.quote;
  return (
    <div style={{ marginTop: '5px', marginBottom: '5px', border: '2px grey', borderStyle: 'solid' }} draggable>
      <div style={{ margin: '10px' }}>
        <h2>{quote.content}</h2>
        <h4 className="mb-2 text-muted">{quote.author} - {quote.additionalInformation} - {quote.type}</h4>
      </div>
    </div>
  )
}

export default QuoteCard;