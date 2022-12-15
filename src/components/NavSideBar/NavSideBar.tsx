import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import QuotesMainPage from "../QuotesMainPage/QuotesMainPage";
import QuotesOverview from "../QuotesOverview/QuotesOverview";

const NavSideBar = () => {
  const [content, setContent] = useState<any>();

  const quotesMainPage = <QuotesMainPage
    title='My Favourite Quotes'
    subtitle='This website is the entry point to my favourite quotes.' />;
  const quotesOverview = <QuotesOverview />;

  useEffect(() => {
    setContent(quotesMainPage);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-2 d-flex flex-column">
          <Button onClick={() => setContent(quotesMainPage)} className="m-2">Randomizer</Button>
          <Button onClick={() => setContent(quotesOverview)} className="m-2" variant="success">Quotes</Button>
          <Button className="m-2" variant="info">Others</Button>
        </div>
        <div className="col-6 vh-100">
          {content}
        </div>
      </div >
    </div>
  )
}

export default NavSideBar;