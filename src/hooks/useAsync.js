import axios from "axios";
import { useState } from "react";
import { base_url } from "../constant/constants";

function useAsync() {
  const [loading2, setLoading] = useState(false);
  const [data2, setData] = useState([]);
  function getData() {
    setLoading(true);

    axios
      .get({ base_url } + "/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((er) => {
        console.log("er:", er);
      });
  }
  return { data2, loading2, getData };
}

export default useAsync;
