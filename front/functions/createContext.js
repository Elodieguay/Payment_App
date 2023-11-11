// import {Cards} from "../src/components/Cards";

import { useEffect, useState } from "react";

const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

export const context = async(id) => {
 
    try {  
        
        const [datas, setDatas] = useState(null);

        useEffect(() => {
          fetchData();
        }, []);
        
        const fetchData = async () => {
            try {
              if(productId = undefined|| productId >=0){
              const response = await fetch(`${host}:${port}/products`);
              const jsonData = await response.json();
              // console.log(jsonData);
              setDatas(jsonData);
              }
            } catch (error) {
              console.log("Error:", error);
            }
          };
        
        const dataToSend = {
            productId: datas.id, 
        }
        console.log("request data :",dataToSend);
        
        const url = 'http://localhost:3000/addcart'
        console.log("request url:",url);
        
        const response = await fetch(url , {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: { "Content-type": "application/json" },
            });
        console.log("request response:",response);
        
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        let data = await response.json();
        alert("Item added to cart");
        console.log(data);
        
        
      } catch (err) {
        alert(`Error: ${err.message}`);
        console.log(err);
      }
}