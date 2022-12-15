import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="justify-content-center d-flex m-5">
      <Spinner animation="border" />
    </div>
  )
}

export default Loading;