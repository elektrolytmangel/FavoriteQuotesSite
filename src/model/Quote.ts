import QuoteType from "./QuoteType";

class Quote {
  id: string | undefined;
  content: string | undefined;
  author: string | undefined;
  additionalInformation: string | undefined;
  type: QuoteType | undefined;
}

export default Quote;