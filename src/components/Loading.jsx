import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
const Loading = ({ load }) => {
  return <>{load && <Spinner animation="border" variant="primary" />}</>;
};

export default Loading;
