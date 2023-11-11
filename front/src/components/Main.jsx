import React, { useEffect, useState } from 'react'
import Cards from './Cards';
const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const Main = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(`${host}:${port}/products`);
        const jsonData = await response.json();
        // console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.log("Error:", error);
      }
    };
  
    
  return (
    <div className=" flex flex-wrap  gap-6 p-10  justify-between ">
    {data ? (
      data.map((item) => <Cards key={item.id} datas={item} />)

      ) : (
        <p>Nous rencontrons actuellement un problème technique</p>
      )}
  </div>
  )
}

export default Main