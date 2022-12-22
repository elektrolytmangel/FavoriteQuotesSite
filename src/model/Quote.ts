import QuoteType from "./QuoteType";

class Quote {
  id: string = '';
  content: string = '';
  author: string = '';
  additionalInformation: string = '';
  type: QuoteType = QuoteType.FAVORITE;
}

export default Quote;