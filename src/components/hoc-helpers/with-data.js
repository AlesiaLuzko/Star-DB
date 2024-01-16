import React, { useState, useEffect } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {

  return ({getData, ...props}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      setLoading(true);
      setError(false);
      getData().then((data) => {
        setData(data);
        setLoading(false);
      })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }, []);

    if(loading) {
      return <Spinner/>
    }

    if(error) {
      return <ErrorIndicator />
    }

    return <View {...props} data={data} />;
  };
};

export default withData;