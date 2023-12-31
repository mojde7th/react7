import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductComponent from "./components/productComponent";
 

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
 
   
  useEffect(() => {
     
    setLoading(true);

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((er) => {
        console.log("er:", er);
      });
  }, []);

  return (
    <div>
      {loading && "Loading......."}
      <div className="flex flex-wrap gap-3">
        {data.map((item) => {
          return (
            <ProductComponent
              key={item.id}
              {...item}
              title={item.title}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
