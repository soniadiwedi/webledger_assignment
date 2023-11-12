import React from "react";

const UseApi = (props) => {
  const [info, setInfo] = React.useState([]);
console.log("Tesing api call ",props);
  React.useEffect(() => {
    switch (props.method) {
      case "get":
        async function api(params) {
          console.log("Testing Get Request");
          const response = await fetch("http://example.com/movies.json");
          const movies = await response.json();
          console.log(movies);
        }
        break;

      case "post":
        console.log("Testing Post Request");
        break;
      default:
        console.log("Testing APi Call");
        break;
    }
  }, []);
  return [info, setInfo];
};

export default UseApi;
