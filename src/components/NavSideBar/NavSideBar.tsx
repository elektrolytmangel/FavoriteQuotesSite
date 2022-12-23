import { useState } from "react";
import { Button } from "react-bootstrap";
import QuotesMainPage from "../QuotesMainPage/QuotesMainPage";
import QuotesOverview from "../QuotesOverview/QuotesOverview";

const NavSideBar = () => {
  const quotesMainPage = <QuotesMainPage
    title='My Favourite Quotes'
    subtitle='This website is the entry point to my favourite quotes.' />;
  const quotesOverview = <QuotesOverview />;
  const [content, setContent] = useState<any>(quotesMainPage);

  return (
    <div className="w-100">
      <div style={{ position: 'fixed', top: '0', overflow: 'hidden' }} >
        <Button onClick={() => setContent(quotesMainPage)} className="ms-2 mt-2" variant="danger" >Randomizer</Button>
        <Button onClick={() => setContent(quotesOverview)} className="ms-2 mt-2" variant="success">Quotes</Button>
        <Button className="ms-2 mt-2" variant="info">Others</Button>
      </div>
      <div style={{ marginTop: '64px' }} className="mx-2">
        {content}
      </div>
    </div>
  )
}

export default NavSideBar;