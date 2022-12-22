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
    <div style={{ margin: '10px' }}>
      <div className="">
        <Button onClick={() => setContent(quotesMainPage)} className="m-2" variant="danger" >Randomizer</Button>
        <Button onClick={() => setContent(quotesOverview)} className="m-2" variant="success">Quotes</Button>
        <Button className="m-2" variant="info">Others</Button>
      </div>
      {content}
    </div>
  )
}

export default NavSideBar;