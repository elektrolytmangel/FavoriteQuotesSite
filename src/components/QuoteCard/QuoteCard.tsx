import { Card } from "react-bootstrap";
import Quote from "../../model/Quote";

interface Props {
  quote: Quote;
}

const QuoteCard = (props: Props) => {
  const quote = props.quote;
  return (
    <Card className="my-2 w-100" bg="dark" text={'light'} draggable>
      <Card.Body>
        <Card.Title>{quote.content}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{quote.author} - {quote.additionalInformation} - {quote.type}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default QuoteCard;