import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("location: ", location);
    const params = new URLSearchParams(location.search);
    console.log("params: ", params);
    const item = params.get("q");
    console.log("q: ", item);
  }, [location.search]);

  return <div>Search</div>;
};

export default Search;
